import { Mail, Phone } from "lucide-react";
import logo from "@/assets/onegrasp-logo.png";

const Footer = () => (
  <footer className="gradient-dark py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="OneGrasp" className="h-10 w-auto mb-4" />
          <div className="space-y-2 text-primary-foreground/70 text-sm">
            <a href="mailto:support@onegrasp.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> support@onegrasp.com
            </a>
            <a href="tel:+918977760443" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +91 89777 60443
            </a>
          </div>
        </div>

        {/* Terms */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Terms & Conditions</h4>
          <p className="text-primary-foreground/60 text-xs leading-relaxed">
            By registering for ICHMP 2026, participants agree to abide by the conference guidelines and policies. All submitted papers must be original work and free from plagiarism. Registration fees are non-refundable once payment is confirmed. The organizers reserve the right to modify the conference schedule or content as deemed necessary.
          </p>
        </div>

        {/* Privacy */}
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Privacy Policy</h4>
          <p className="text-primary-foreground/60 text-xs leading-relaxed">
            We respect your privacy and are committed to protecting your personal data. Information collected during registration is used solely for conference-related communications and services. We do not share your personal information with third parties without your consent. All data is stored securely and handled in accordance with applicable data protection regulations.
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-primary-foreground/50 text-xs">
          Accredited by: Crossref · DOI 10.65838 · CPD · Journal Citation Index · MetaSpectra · RMetaHub · IntelliMindEd · Google Scholar
        </p>
        <p className="text-primary-foreground/40 text-xs mt-2">
          © 2026 OneGrasp. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
