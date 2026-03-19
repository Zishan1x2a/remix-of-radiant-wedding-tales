import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ganeshaImg from "@/assets/ganesha-mandala.png";

interface WelcomeSectionProps {
  guestName?: string;
  groomName: string;
  brideName: string;
}

type Phase = "lights" | "welcome" | "opened";

const WelcomeSection = ({ guestName = "Guest", groomName, brideName }: WelcomeSectionProps) => {
  const [phase, setPhase] = useState<Phase>("lights");

  // Auto-advance from lights → welcome after animation
  useEffect(() => {
    if (phase === "lights") {
      const timer = setTimeout(() => setPhase("welcome"), 2800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Lock body scroll until opened
  useEffect(() => {
    if (phase !== "opened") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const handleOpen = () => {
    setPhase("opened");
    setTimeout(() => {
      document.getElementById("opening")?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-maroon overflow-hidden">
      {/* Full-page background mandala */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={ganeshaImg}
          alt=""
          className="w-[120vmax] h-[120vmax] opacity-[0.07] mandala-spin"
        />
      </div>

      {/* Radial glow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, hsl(var(--maroon)) 80%)",
        }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/20 m-6 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/20 m-6 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/20 m-6 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/20 m-6 rounded-br-lg" />

      <AnimatePresence mode="wait">
        {/* ── PHASE 1: Light Spread Intro ── */}
        {phase === "lights" && (
          <motion.div
            key="lights"
            className="absolute inset-0 z-20 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Dark overlay that fades */}
            <motion.div
              className="absolute inset-0 bg-[hsl(var(--maroon))]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />

            {/* Bottom light rays spreading upward */}
            {[...Array(7)].map((_, i) => {
              const angle = -30 + i * 10; // spread from -30° to +30°
              return (
                <motion.div
                  key={i}
                  className="absolute bottom-0 left-1/2 origin-bottom"
                  style={{
                    width: "3px",
                    height: "120vh",
                    rotate: `${angle}deg`,
                    background: `linear-gradient(to top, hsl(var(--gold) / 0.6), hsl(var(--gold) / 0.1) 50%, transparent 80%)`,
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: [0, 0.8, 0.4] }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              );
            })}

            {/* Central glow burst from bottom */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: "200vw",
                height: "200vh",
                background: "radial-gradient(ellipse at 50% 100%, hsl(var(--gold) / 0.25) 0%, hsl(var(--gold) / 0.08) 30%, transparent 60%)",
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`p-${i}`}
                className="absolute rounded-full"
                style={{
                  width: 2 + Math.random() * 4,
                  height: 2 + Math.random() * 4,
                  left: `${15 + Math.random() * 70}%`,
                  bottom: "0%",
                  background: "hsl(var(--gold) / 0.7)",
                  boxShadow: "0 0 6px hsl(var(--gold) / 0.4)",
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: -(200 + Math.random() * 500),
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: 0.5 + Math.random() * 1.2,
                  duration: 1.5 + Math.random() * 1.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}

        {/* ── PHASE 2: Welcome with Open Invitation ── */}
        {phase === "welcome" && (
          <motion.div
            key="welcome"
            className="relative z-10 flex flex-col items-center text-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Ganesha seal */}
            <motion.div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-gold/60 flex items-center justify-center mb-10 relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="absolute inset-0 rounded-full border border-gold/20 animate-ping"
                style={{ animationDuration: "3s" }}
              />
              <img src={ganeshaImg} alt="Shree Ganeshaya Namah" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover" />
            </motion.div>

            <motion.p
              className="font-display text-gold-light text-base md:text-lg mb-1 tracking-[0.4em] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Wedding Invitation
            </motion.p>

            <motion.div
              className="w-20 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent my-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />

            <motion.h2
              className="font-display text-primary-foreground text-3xl md:text-5xl font-bold mb-2 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="gold-shimmer">{groomName}</span>
              <span className="text-gold mx-3 text-2xl md:text-4xl italic font-normal">&</span>
              <span className="gold-shimmer">{brideName}</span>
            </motion.h2>

            <motion.p
              className="text-gold-light/80 text-sm md:text-base mt-6 mb-8 font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Dear <span className="text-gold font-semibold">{guestName}</span>, you are cordially invited
            </motion.p>

            <motion.button
              onClick={handleOpen}
              className="px-10 py-3.5 border border-gold/60 text-gold font-body text-sm tracking-[0.25em] uppercase rounded-sm hover:bg-gold/10 transition-all duration-500 hover:border-gold hover:shadow-[0_0_30px_hsl(45_50%_60%/0.2)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.05, letterSpacing: "0.35em" }}
              whileTap={{ scale: 0.95 }}
            >
              Open Invitation
            </motion.button>
          </motion.div>
        )}

        {/* ── PHASE 3: Opened ── */}
        {phase === "opened" && (
          <motion.div
            key="opened"
            className="relative z-10 flex flex-col items-center text-center px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <img src={ganeshaImg} alt="Shree Ganeshaya Namah" className="w-28 h-28 md:w-36 md:h-36 float-gentle" />
            </motion.div>

            <motion.p
              className="font-display text-gold text-base md:text-lg tracking-[0.3em] uppercase mb-2"
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              ॥ Shree Ganeshaya Namah ॥
            </motion.p>

            <motion.p
              className="font-body text-gold-light/70 text-xs md:text-sm mb-6 max-w-md italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              O Lord Ganesha, of curved trunk and massive form,<br />
              whose brilliance is equal to billions of suns,<br />
              please bless us so that all our endeavours are free of obstacles.
            </motion.p>

            <motion.div
              className="w-20 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            />

            <motion.p
              className="font-body text-gold-light/80 text-sm mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Dear <span className="text-gold font-semibold">{guestName}</span>
            </motion.p>

            <motion.p
              className="font-body text-gold-light/60 text-xs mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              We warmly invite you and your family to celebrate with us
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <a
                href="#opening"
                className="px-10 py-3.5 border border-gold/60 text-gold font-body text-sm tracking-[0.25em] uppercase rounded-sm hover:bg-gold/10 transition-all duration-500 inline-block hover:border-gold hover:shadow-[0_0_30px_hsl(45_50%_60%/0.2)]"
              >
                Continue ↓
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WelcomeSection;
