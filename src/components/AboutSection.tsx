import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">About the Conference</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
        <p>The International Conference on Nursing, Midwifery & Patient Care (IC-HMP 2026) brings together healthcare professionals, researchers, and academics from around the globe to explore the latest advancements in nursing innovation, midwifery practices, and patient care technologies.</p>
        <p>This conference highlights the critical importance of midwifery in maternal and neonatal health outcomes, explores cutting-edge patient care advancements, and fosters global collaboration in healthcare research. Join leading experts and emerging scholars to share knowledge, build networks, and shape the future of healthcare.</p>
        <p>With accreditation from Crossref, CPD, and indexing across Google Scholar and 10+ directories, IC-HMP 2026 ensures your research gains maximum global visibility and academic recognition.</p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
