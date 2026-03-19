import { motion } from "framer-motion";
import coupleImg from "@/assets/couple-silhouette.png";
import ornamentImg from "@/assets/ornament-divider.png";

interface OpeningSectionProps {
  groomName: string;
  brideName: string;
  groomFather: string;
  groomMother: string;
  brideFather: string;
  brideMother: string;
  weddingDate: string;
}

const OpeningSection = ({
  groomName,
  brideName,
  groomFather,
  groomMother,
  brideFather,
  brideMother,
  weddingDate,
}: OpeningSectionProps) => {
  return (
    <section id="opening" className="section-padding bg-cream relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.img
          src={ornamentImg}
          alt=""
          className="w-48 md:w-64 mx-auto mb-8 opacity-60"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Shloka in English */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-maroon text-sm md:text-base italic leading-relaxed">
            "I tie this sacred thread around your neck, O beautiful one,<br />
            may you live a hundred autumns with me."
          </p>
          <p className="font-body text-muted-foreground text-[10px] md:text-xs mt-2">
            — Mangalya Sutra Mantra
          </p>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={coupleImg} alt="Couple" className="w-40 md:w-52 mx-auto" />
        </motion.div>

        {/* Parents Info - Bride Side */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-body text-muted-foreground text-xs tracking-widest uppercase mb-1">
            Daughter of
          </p>
          <p className="font-display text-foreground text-lg md:text-xl">
            {brideFather} & {brideMother}
          </p>
        </motion.div>

        {/* Bride Name */}
        <motion.h2
          className="font-display text-maroon text-4xl md:text-6xl font-bold mb-2 gold-shimmer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {brideName}
        </motion.h2>

        <motion.div
          className="my-6 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="h-px w-12 bg-gold/50" />
          <span className="font-display text-gold text-2xl italic">&</span>
          <div className="h-px w-12 bg-gold/50" />
        </motion.div>

        {/* Groom Name */}
        <motion.h2
          className="font-display text-maroon text-4xl md:text-6xl font-bold mb-2 gold-shimmer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {groomName}
        </motion.h2>

        {/* Parents Info - Groom Side */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="font-body text-muted-foreground text-xs tracking-widest uppercase mb-1">
            Son of
          </p>
          <p className="font-display text-foreground text-lg md:text-xl">
            {groomFather} & {groomMother}
          </p>
        </motion.div>

        {/* Date */}
        <motion.div
          className="mt-10 py-4 px-8 border border-gold/30 inline-block rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="font-body text-muted-foreground text-xs tracking-widest uppercase mb-1">Save the Date</p>
          <p className="font-display text-maroon text-xl md:text-2xl font-semibold">{weddingDate}</p>
        </motion.div>

        <motion.img
          src={ornamentImg}
          alt=""
          className="w-48 md:w-64 mx-auto mt-10 opacity-60 rotate-180"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default OpeningSection;
