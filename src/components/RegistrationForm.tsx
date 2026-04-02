import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Registration submitted successfully! We'll contact you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="registration" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Secure Your Spot Now</h2>
          <p className="text-destructive font-semibold animate-pulse-banner">Limited Online Seats — Filling Fast</p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 shadow-xl border border-border space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Input placeholder="Full Name" required className="rounded-xl" />
            <Input type="email" placeholder="Email" required className="rounded-xl" />
            <Input placeholder="Phone" required className="rounded-xl" />
            <Input placeholder="Country" required className="rounded-xl" />
          </div>
          <Input placeholder="Profession" required className="rounded-xl" />
          <Textarea placeholder="Comments (optional)" className="rounded-xl" rows={3} />
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full gradient-sky text-primary-foreground font-bold text-lg py-6 rounded-full shadow-xl hover:scale-105 transition-all"
          >
            {loading ? "Submitting..." : "Submit & Reserve My Spot"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RegistrationForm;
