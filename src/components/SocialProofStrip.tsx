import { motion } from "framer-motion";
import { Presentation, Award, Globe, Briefcase } from "lucide-react";

const features = [
  {
    icon: Presentation,
    title: "Workshops",
    desc: "Hands-on sessions led by global healthcare experts covering the latest innovations and practices.",
  },
  {
    icon: Award,
    title: "Certification",
    desc: "Earn CPD-accredited certificates and DOI-indexed publication credentials for career growth.",
  },
  {
    icon: Globe,
    title: "Global Networking",
    desc: "Connect with researchers, clinicians, and academics from 50+ countries worldwide.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    desc: "Unlock new career paths through keynote exposure, publication, and professional development.",
  },
];

const SocialProofStrip = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          About the Conference
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          IC-HMP 2026 offers world-class workshops, certification programs, and career-defining opportunities for healthcare professionals globally.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-md hover:glow-sky hover:scale-[1.02] transition-all group"
          >
            <div className="w-14 h-14 gradient-sky rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofStrip;
