import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface CalendlyWidgetProps {
  url: string;
  text?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export default function CalendlyWidget({
  url = 'https://calendly.com/kbykrishnabalaji/personalized-real-estate-consultation',
  text = 'Schedule a Visit',
  className = '',
  variant = 'default',
  size = 'default'
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyPopup = () => {
    // @ts-ignore - Calendly is added to window by the script
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url });
    }
  };

  // Base styles
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // Size styles
  const sizeStyles = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    lg: "h-12 px-8 text-lg"
  };
  
  // Variant styles
  const variantStyles = {
    default: "bg-[#00827F] text-white hover:bg-[#005f60]",
    outline: "border-2 border-[#00827F] text-[#00827F] hover:bg-[#00827F]/10",
    ghost: "text-[#00827F] hover:bg-[#00827F]/10"
  };

  return (
    <button 
      onClick={openCalendlyPopup}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <Calendar className="mr-2 h-4 w-4 text-current" />
      {text}
    </button>
  );
} 