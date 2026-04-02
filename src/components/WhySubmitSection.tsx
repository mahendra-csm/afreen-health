import { motion } from "framer-motion";
import { FileCheck, Globe, Award, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { icon: FileCheck, title: "DOI Assigned (Crossref)" },
  { icon: Globe, title: "Indexed Globally" },
  { icon: Award, title: "CPD Credits" },
  { icon: Zap, title: "Fast Review Process" },
  { icon: BookOpen, title: "Publication Opportunity" },
];

const WhySubmitSection = () => (
  <section className="py-20 gradient-dark">
    <div className="container mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-12">Why Submit Your Research?</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
            </motion.div>
          ))}
        </div>
      <Button
  asChild
  size="lg"
  className="gradient-sky text-primary-foreground font-bold text-lg px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all"
>
  <a
    href="https://onegrasp.com/conference-events/international-conference-on-nursing-midwifery-patient-care/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Submit Abstract Now
  </a>
</Button>
      </motion.div>
    </div>
  </section>
);

export default WhySubmitSection;
