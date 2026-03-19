import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownSectionProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = ({ targetDate }: CountdownSectionProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="section-padding bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45 50% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-gold-light text-xs tracking-[0.3em] uppercase mb-2">Counting Down To</p>
          <h2 className="font-display text-primary-foreground text-3xl md:text-5xl font-bold mb-4 gold-shimmer">Our Special Day</h2>
          <p className="font-body text-gold-light/60 text-sm mb-10">The moment we've been waiting for</p>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-full aspect-square flex items-center justify-center border border-gold/30 rounded-lg bg-maroon-dark/30 backdrop-blur-sm mb-2">
                <span className="font-display text-gold text-3xl md:text-6xl font-bold">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <p className="font-body text-gold-light/80 text-[10px] md:text-xs tracking-wider uppercase">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
