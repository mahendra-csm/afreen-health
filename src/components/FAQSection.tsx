import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Is participation free or paid?", a: "The conference offers both free and paid registration tiers. Contact us for details on pricing and early-bird discounts." },
  { q: "Will I receive a certificate?", a: "Yes! All participants receive an officially accredited certificate with DOI and Crossref branding." },
  { q: "Will my abstract receive a DOI?", a: "Absolutely. Every accepted abstract is assigned a DOI through Crossref for permanent academic citation." },
  { q: "Which indexing directories will my abstract appear in?", a: "Your work will be indexed in Google Scholar, MetaSpectra, RMetaHub, IntelliMindEd, Journal Citation Index, and 6+ more directories." },
  { q: "Is the conference CPD accredited?", a: "Yes, IC-HMP 2026 is CPD accredited. Participants earn continuing professional development credits." },
  { q: "How do I join the conference?", a: "Register through our online form above. You'll receive joining details via email before the conference date." },
  { q: "Can I present from any country?", a: "Yes! The conference is fully online, welcoming presenters and participants from all countries worldwide." },
  { q: "What topics are accepted?", a: "We accept abstracts on Clinical Nursing, Midwifery & Maternal Health, Patient Safety, Healthcare Technology, and Public Health Research." },
];

const FAQSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-sm">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
