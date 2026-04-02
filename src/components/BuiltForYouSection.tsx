import { motion } from "framer-motion";
import aiImg from "@/assets/audience-ai.jpg";
import adminImg from "@/assets/audience-admin.jpg";
import biomedImg from "@/assets/audience-biomed.jpg";
import startupImg from "@/assets/audience-startup.jpg";

const audiences = [
  {
    image: aiImg,
    title: "Data Scientists & AI Specialists",
    subtitle: "Innovate with AI in Healthcare",
    desc: "Explore AI-driven diagnostics, machine learning models, and healthcare data analytics shaping the future of medicine.",
  },
  {
    image: adminImg,
    title: "Hospital Administrators",
    subtitle: "Optimize Healthcare Management",
    desc: "Learn strategies for hospital operations, patient management systems, and healthcare leadership.",
  },
  {
    image: biomedImg,
    title: "Biomedical Engineers",
    subtitle: "Build Medical Technologies",
    desc: "Discover innovations in medical devices, imaging systems, and bioengineering solutions.",
  },
  {
    image: startupImg,
    title: "Healthcare Startups & Entrepreneurs",
    subtitle: "Scale Your Innovation",
    desc: "Connect with investors, showcase your ideas, and grow your healthcare startup globally.",
  },
];

const BuiltForYouSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          This Conference Is Built For You
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          Whether you're a researcher, clinician, or innovator — IC-HMP 2026 has something transformative for your career.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:glow-sky hover:scale-[1.02] transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-semibold text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                {a.subtitle}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BuiltForYouSection;
