import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Form Submitted",
      description: "We'll get back to you soon!",
    });
    form.reset();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Have a question or want to discuss a project? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="What's this about?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">
                Harihara Estate, Opp. ISI<br />
                St. No:8, Habsiguda<br />
                Hyderabad-500 007
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@hariharaestates.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
