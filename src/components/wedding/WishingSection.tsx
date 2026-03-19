import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

interface WishingSectionProps {
  wishes: Wish[];
  onSubmitWish?: (name: string, message: string) => void;
}

const WishingSection = ({ wishes, onSubmitWish }: WishingSectionProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    onSubmitWish?.(name, message);
    setSubmitted(true);
    setName("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="wishes" className="section-padding bg-cream relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-2">Send Your Blessings</p>
          <h2 className="font-display text-maroon text-3xl md:text-5xl font-bold gold-shimmer">Wedding Wishes</h2>
          <p className="font-body text-muted-foreground text-sm mt-2">Share your love and blessings with the couple</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto mb-12 p-6 bg-cream-dark rounded-lg border border-gold/20 shadow-deep"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 mb-3 bg-cream border border-gold/20 rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
          />
          <textarea
            placeholder="Write your blessings..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 mb-3 bg-cream border border-gold/20 rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-maroon text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-maroon-light transition-colors flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <Heart className="w-4 h-4" /> Thank You!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Blessings
              </>
            )}
          </button>
        </motion.form>

        {wishes.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                className="p-4 bg-cream-dark rounded-lg border border-gold/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <p className="font-body text-foreground text-sm mb-2 italic">"{wish.message}"</p>
                <div className="flex items-center gap-2">
                  <Heart className="w-3 h-3 text-maroon" />
                  <span className="font-display text-maroon text-sm font-semibold">{wish.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WishingSection;
