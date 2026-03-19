import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FooterProps {
  groomName: string;
  brideName: string;
}

const Footer = ({ groomName, brideName }: FooterProps) => {
  return (
    <footer className="py-8 bg-maroon-dark text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-gold" />
          <span className="font-display text-gold text-lg">{groomName} & {brideName}</span>
          <Heart className="w-4 h-4 text-gold" />
        </div>
        <p className="font-body text-gold-light/40 text-xs">
          Made with love | Wedding Invitation
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
