import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { BrochureFormData } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

interface BrochureFormProps {
  projectName: string;
  brochureUrl: string;
  className?: string;
  buttonText?: string;
}

export default function BrochureForm({ 
  projectName, 
  brochureUrl,
  className = "bg-[#00827f] text-white rounded-full px-6 py-3 shadow-lg hover:bg-[#006c6a] transition-colors flex items-center gap-2",
  buttonText = "Get Brochure"
}: BrochureFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize FingerprintJS
    const initFingerprintJS = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setVisitorId(result.visitorId);

      // Check if user has already downloaded
      if (result.visitorId) {
        const { data } = await supabase
          .from('brochure_downloads')
          .select('*')
          .eq('visitor_id', result.visitorId)
          .eq('project_name', projectName)
          .single();

        if (data) {
          // User has already downloaded, store their info
          localStorage.setItem(`brochure_${projectName}`, JSON.stringify(data));
        }
      }
    };

    initFingerprintJS();
  }, [projectName]);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = `${projectName}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Success!",
      description: "Your brochure is downloading...",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!visitorId) {
        throw new Error('Failed to generate visitor ID');
      }

      const formData = new FormData(e.currentTarget);
      const data: BrochureFormData = {
        first_name: formData.get("firstName") as string,
        last_name: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        project_name: projectName,
        visitor_id: visitorId
      };

      // Save form data to Supabase
      const { error } = await supabase
        .from("brochure_downloads")
        .insert([data]);

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
      }

      // Store user data in localStorage
      localStorage.setItem(`brochure_${projectName}`, JSON.stringify(data));

      // Download brochure
      downloadBrochure();

      // Close dialog
      setIsOpen(false);
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    // Check if user data exists in localStorage
    const savedData = localStorage.getItem(`brochure_${projectName}`);
    if (savedData) {
      // If exists, directly download
      downloadBrochure();
    } else {
      // If not, open form
      setIsOpen(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button className={className} onClick={handleClick}>
        <Download className="w-5 h-5" />
        {buttonText}
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Download Brochure</DialogTitle>
          <p className="text-sm text-gray-500 mt-2">
            Welcome to Harihara Estates! Please fill in your details to download the brochure.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Download Brochure"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 