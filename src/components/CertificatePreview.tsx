import { motion } from "framer-motion";
import certificateImg from "@/assets/certificate-sample.png";

const CertificatePreview = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Certificate Preview</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Every participant receives an officially accredited certificate with DOI and Crossref branding.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
          <img src={certificateImg} alt="Certificate of Appreciation - OneGrasp" className="w-full" loading="lazy" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificatePreview;
