import logo from "@/assets/onegrasp-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
    <div className="container mx-auto px-4 flex items-center justify-between h-16">
      <a href="/" className="flex items-center gap-2 shrink-0">
        <img src={logo} alt="OneGrasp" className="h-10 w-auto" />
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#call-for-papers" className="hover:text-primary transition-colors">Call for Papers</a>
        <a href="#committee" className="hover:text-primary transition-colors">Committee</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
      </nav>
      <Button
        size="sm"
        className="gradient-sky text-primary-foreground font-semibold rounded-full px-6"
        onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
      >
        Register
      </Button>
    </div>
  </header>
);

export default Header;
