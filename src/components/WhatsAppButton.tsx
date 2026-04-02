import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919877766443?text=Hello%20I%20am%20interested%20in%20the%20conference"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float group"
    aria-label="Chat with us on WhatsApp"
    title="Chat with us on WhatsApp"
  >
    <MessageCircle className="w-8 h-8 text-primary-foreground" fill="white" />
    <span className="absolute right-20 bg-foreground text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Chat with us on WhatsApp
    </span>
  </a>
);

export default WhatsAppButton;
