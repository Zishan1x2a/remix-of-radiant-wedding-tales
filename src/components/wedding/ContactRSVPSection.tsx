import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, QrCode } from "lucide-react";

export interface ContactPerson {
  id: string;
  name: string;
  role: string;
  phone: string;
  whatsapp?: string;
}

interface ContactRSVPSectionProps {
  contacts: ContactPerson[];
  showDigitalShagun?: boolean;
  upiId?: string;
  onRsvpSubmit?: (data: RSVPData) => void;
}

interface RSVPData {
  attending: boolean;
  guestCount: number;
  foodPreference: string;
}

const ContactRSVPSection = ({ contacts, showDigitalShagun = true, upiId, onRsvpSubmit }: ContactRSVPSectionProps) => {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [foodPref, setFoodPref] = useState("veg");
  const [rsvpDone, setRsvpDone] = useState(false);

  const handleRsvp = () => {
    if (attending === null) return;
    onRsvpSubmit?.({ attending, guestCount, foodPreference: foodPref });
    setRsvpDone(true);
  };

  return (
    <section id="rsvp" className="section-padding bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, hsl(45 50% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-gold-light text-xs tracking-[0.3em] uppercase mb-2">We'd Love Your Presence</p>
          <h2 className="font-display text-primary-foreground text-3xl md:text-5xl font-bold gold-shimmer">Accept Our Invitation</h2>
          <p className="font-body text-gold-light/60 text-sm mt-2">Let us know if you can make it</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 md:p-8 rounded-lg bg-maroon-dark/30 border border-gold/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-gold text-xl font-semibold mb-6">RSVP</h3>

            {rsvpDone ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                <p className="font-display text-primary-foreground text-xl">Thank You!</p>
                <p className="font-body text-gold-light/60 text-sm mt-1">Your response has been recorded.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <p className="font-body text-gold-light/80 text-sm mb-2">Will you attend?</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setAttending(true)}
                      className={`flex-1 py-2.5 rounded-sm font-body text-sm tracking-wider transition-colors ${
                        attending === true
                          ? "bg-gold text-maroon-dark"
                          : "border border-gold/40 text-gold hover:bg-gold/10"
                      }`}
                    >
                      Yes, I'll be there!
                    </button>
                    <button
                      onClick={() => setAttending(false)}
                      className={`flex-1 py-2.5 rounded-sm font-body text-sm tracking-wider transition-colors ${
                        attending === false
                          ? "bg-gold text-maroon-dark"
                          : "border border-gold/40 text-gold hover:bg-gold/10"
                      }`}
                    >
                      Sorry, can't make it
                    </button>
                  </div>
                </div>

                {attending && (
                  <>
                    <div>
                      <p className="font-body text-gold-light/80 text-sm mb-2">Number of Guests</p>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                          className="w-10 h-10 border border-gold/40 text-gold rounded-sm hover:bg-gold/10 transition-colors font-display text-lg"
                        >
                          −
                        </button>
                        <span className="font-display text-gold text-2xl w-8 text-center">{guestCount}</span>
                        <button
                          onClick={() => setGuestCount(guestCount + 1)}
                          className="w-10 h-10 border border-gold/40 text-gold rounded-sm hover:bg-gold/10 transition-colors font-display text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="font-body text-gold-light/80 text-sm mb-2">Food Preference</p>
                      <div className="flex gap-2 flex-wrap">
                        {[
                          { value: "veg", label: "Pure Vegetarian" },
                          { value: "jain", label: "Jain" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setFoodPref(opt.value)}
                            className={`px-4 py-2 rounded-sm font-body text-xs tracking-wider transition-colors ${
                              foodPref === opt.value
                                ? "bg-gold text-maroon-dark"
                                : "border border-gold/40 text-gold hover:bg-gold/10"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <button
                  onClick={handleRsvp}
                  disabled={attending === null}
                  className="w-full py-3 bg-gold text-maroon-dark font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit Response
                </button>
              </div>
            )}
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="p-6 rounded-lg bg-maroon-dark/30 border border-gold/20 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-gold text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div key={contact.id} className="flex items-center justify-between py-2 border-b border-gold/10 last:border-0">
                    <div>
                      <p className="font-display text-primary-foreground text-sm font-semibold">{contact.name}</p>
                      <p className="font-body text-gold-light/50 text-xs">{contact.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`tel:${contact.phone}`}
                        className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      {contact.whatsapp && (
                        <a
                          href={`https://wa.me/${contact.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {showDigitalShagun && (
              <motion.div
                className="p-6 rounded-lg bg-maroon-dark/30 border border-gold/20 backdrop-blur-sm text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-display text-gold text-xl font-semibold mb-2">Digital Blessing</h3>
                <p className="font-body text-gold-light/50 text-xs mb-4">Send your gift digitally</p>
                <div className="w-32 h-32 mx-auto bg-cream rounded-lg flex items-center justify-center mb-3">
                  <QrCode className="w-20 h-20 text-maroon" />
                </div>
                {upiId && (
                  <p className="font-body text-gold-light/70 text-xs">UPI: {upiId}</p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactRSVPSection;
