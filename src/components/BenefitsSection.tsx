import { motion } from "framer-motion";
import { Award, BookOpen, Mic, Globe, FileCheck, Users } from "lucide-react";

const benefits = [
  { icon: Award, title: "Certificate of Participation / Presentation", desc: "Official accredited certificate for all participants and presenters." },
  { icon: FileCheck, title: "DOI via Crossref", desc: "Your paper receives a Digital Object Identifier for permanent citation." },
  { icon: BookOpen, title: "CPD Accredited Certificate", desc: "Earn Continuing Professional Development credits for your career." },
  { icon: Mic, title: "Keynote Speaker Opportunity", desc: "Selected researchers get the chance to deliver keynote presentations." },
  { icon: Globe, title: "Indexed in Google Scholar + 10 Directories", desc: "Global visibility across major academic indexing platforms." },
  { icon: Users, title: "Global Research Networking", desc: "Connect with healthcare researchers from 50+ countries." },
];

const BenefitsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What You Gain by Joining</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Elevate your research career with global recognition and accredited credentials.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-8 shadow-md hover:glow-sky hover:scale-[1.02] transition-all border border-border"
          >
            <div className="w-14 h-14 gradient-sky rounded-xl flex items-center justify-center mb-5">
              <b.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
