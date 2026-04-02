import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Globe, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Healthcare environment" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(214,71%,14%,0.85)] via-[hsl(199,89%,48%,0.6)] to-[hsl(214,71%,14%,0.8)]" />
      </div>

      {/* Animated Top Strip */}
      <div className="absolute top-0 left-0 right-0 z-20 gradient-sky py-3 text-center animate-pulse-banner">
        <p className="text-sm md:text-base font-bold tracking-widest uppercase text-primary-foreground">
          🔴 SEATS FILLING FAST — REGISTER NOW!
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            OneGrasp Presents
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-5xl mx-auto mb-6">
            International Conference on Nursing, Midwifery & Patient Care
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
            IC-HMP 2026 — Advancing Global Healthcare Research Excellence
          </p>

          {/* Sub Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-medium">15th & 16th April 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              <span className="font-medium">Online Mode</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="font-medium">Global Participation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gradient-sky text-primary-foreground font-bold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
            >
              Register Now
            </Button>
          <Button
  asChild
  size="lg"
  variant="outline"
  className="border-2 border-primary-foreground text-primary-foreground bg-transparent font-bold text-lg px-10 py-6 rounded-full hover:bg-primary-foreground/10 transition-all"
>
  <a
    href="https://onegrasp.com/conference-events/international-conference-on-nursing-midwifery-patient-care/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Submit Abstract
  </a>
</Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {["Crossref", "DOI 10.65838", "CPD Accredited", "Google Scholar", "MetaSpectra", "RMetaHub", "IntelliMindEd", "Journal Citation Index"].map((badge) => (
              <div key={badge} className="glass-card px-4 py-2 rounded-full text-xs md:text-sm font-medium text-primary-foreground/90">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <CountdownTimer />
      </div>
    </section>
  );
};

const TARGET_DATE = new Date("2026-05-30T00:00:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isOver: diff === 0,
  };
}

const CountdownTimer = () => {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.isOver) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
        <p className="text-xl md:text-2xl font-bold text-destructive">Registration Closed</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-6"
    >
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
        Limited Seats – Registration Closing Soon
      </p>
      <div className="flex justify-center gap-3 md:gap-4">
        {[
          { val: time.days, label: "Days" },
          { val: time.hours, label: "Hours" },
          { val: time.minutes, label: "Min" },
          { val: time.seconds, label: "Sec" },
        ].map(({ val, label }) => (
          <div key={label} className="glass-card rounded-2xl px-4 py-3 md:px-6 md:py-4 min-w-[65px] md:min-w-[80px]">
            <div className="text-2xl md:text-4xl font-bold text-primary-foreground tabular-nums">
              {String(val).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-primary-foreground/70 uppercase tracking-wider mt-1">{label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSection;
