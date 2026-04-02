import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import confHall from "@/assets/conference-hall.jpg";

const topics = [
  "Clinical Nursing",
  "Midwifery & Maternal Health",
  "Patient Safety & Care Innovation",
  "Healthcare Technology",
  "Public Health Research",
];

const CallForPapers = () => (
  <section id="call-for-papers" className="relative py-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={confHall} alt="Conference hall" className="w-full h-full object-cover" loading="lazy" width={1600} height={800} />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(214,71%,14%,0.9)] to-[hsl(199,89%,48%,0.7)]" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Call for Papers</h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10">Submit your research abstract and get published with a DOI through Crossref.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {topics.map((t) => (
            <span key={t} className="glass-card px-5 py-2.5 rounded-full text-sm font-medium text-primary-foreground">{t}</span>
          ))}
        </div>
        <Button
          size="lg"
          className="gradient-sky text-primary-foreground font-bold text-lg px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all"
          onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
        >
          Submit Your Abstract
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CallForPapers;
