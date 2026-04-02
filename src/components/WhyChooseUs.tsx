import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Star } from "lucide-react";

const cards = [
  { icon: ShieldCheck, title: "Verified & Accredited", desc: "Accredited by Crossref, CPD, and global indexing platforms." },
  { icon: Zap, title: "Instant Certification", desc: "Receive your certificate immediately after participation." },
  { icon: Globe, title: "Global Reach", desc: "Researchers from 50+ countries join every edition." },
  { icon: Star, title: "Trusted Platform", desc: "OneGrasp is recognized for research excellence worldwide." },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 text-center shadow-md hover:glow-sky hover:scale-[1.02] transition-all border border-border"
          >
            <c.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
