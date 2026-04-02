import { motion } from "framer-motion";
import nurseImg from "@/assets/nurse-patient.jpg";
import doctorImg from "@/assets/doctor-consultation.jpg";

const VisualStorySection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-xl group"
        >
          <img src={nurseImg} alt="Nurse helping elderly patient" loading="lazy" width={800} height={1000}
            className="w-full h-80 md:h-[420px] object-cover group-hover:scale-110 transition-transform duration-500" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-xl group"
        >
          <img src={doctorImg} alt="Doctor consulting with patient" loading="lazy" width={800} height={1000}
            className="w-full h-80 md:h-[420px] object-cover group-hover:scale-110 transition-transform duration-500" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default VisualStorySection;
