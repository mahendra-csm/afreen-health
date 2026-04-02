import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const committee = [
  {
    name: "Dr. Santosh Kumar Mishra",
    image: "https://www.onegraspevents.online/assets/Dr.-Santosh-Mishra-kG_Zzjs2.webp",
    designation: "Independent Researcher, Population Education Resource Centre",
    org: "S.N.D.T. Women's University",
  },
  {
    name: "Dr. David Wortley",
    image: "https://www.onegraspevents.online/assets/1-11-Dct2wlhw.webp",
    designation: "Non-Executive Director, WLMES · VP, ISDM",
    org: "CEO & Founder, 360in360",
  },
  {
    name: "Dr. Nilesh Charankar",
    image: "https://www.onegraspevents.online/assets/1-10-DiLKGbhq.webp",
    designation: "Lead Full-Stack Developer / Researcher / Author",
    org: "Technology & Software",
  },
  {
    name: "Dr. Sai Suman Singamsetty",
    image: "https://www.onegraspevents.online/assets/2-10-B7HrTGiD.webp",
    designation: "Data Management Specialist / Keynote Speaker",
    org: "Centurion University of Technology",
  },
  {
    name: "Dr. Maria Cecilia Colautti",
    image: "https://www.onegraspevents.online/assets/3-10-DdAHx6O7.webp",
    designation: "Secretary, ICOH Scientific Committee",
    org: "Universidad Nacional de la Patagonia",
  },
  {
    name: "Dr. Manjunath G N",
    image: "https://www.onegraspevents.online/assets/5-11-Fo8I929h.webp",
    designation: "Professor & HOD, Pharmacology",
    org: "Sri Siddhartha Medical College",
  },
  {
    name: "Dr. Ju Lee Kim",
    image: "https://www.onegraspevents.online/assets/Dr.-Ju-Lee-Kim-BV8rdGpN.webp",
    designation: "Senior Researcher, R&D Center",
    org: "RedGene — WWU Münster",
  },
];

const ScientificCommittee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Meet Our Scientific Committee</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Leading Global Experts</h2>
          <p className="text-muted-foreground">Guiding IC-HMP 2026 research excellence</p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {committee.map((m, i) => (
            <CommitteeCard key={m.name} member={m} index={i} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative mt-10">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
            {committee.map((m, i) => (
              <div key={m.name} className="snap-center shrink-0 w-[280px]">
                <CommitteeCard member={m} index={i} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommitteeCard = ({ member, index }: { member: typeof committee[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="bg-card rounded-[20px] p-6 text-center shadow-md hover:scale-105 hover:glow-sky transition-all border border-border"
  >
    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
      <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <span className="inline-block gradient-sky text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
      International Expert
    </span>
    <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
    <p className="text-muted-foreground text-xs leading-relaxed">{member.designation}</p>
    <p className="text-muted-foreground text-xs mt-1 font-medium">{member.org}</p>
  </motion.div>
);

export default ScientificCommittee;
