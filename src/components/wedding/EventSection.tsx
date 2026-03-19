import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Shirt } from "lucide-react";

export interface WeddingEvent {
  id: string;
  name: string;
  nameHindi: string;
  date: string;
  time: string;
  venue: string;
  venueAddress: string;
  dressCode?: string;
  mapLink?: string;
  colorTheme: "haldi" | "mehendi" | "sangeet" | "wedding" | "reception";
}

interface EventSectionProps {
  events: WeddingEvent[];
}

const colorMap = {
  haldi: "bg-haldi/10 border-haldi",
  mehendi: "bg-mehendi/10 border-mehendi",
  sangeet: "bg-sangeet/10 border-sangeet",
  wedding: "bg-maroon/10 border-maroon",
  reception: "bg-reception/10 border-reception",
};

const dotColorMap = {
  haldi: "bg-haldi",
  mehendi: "bg-mehendi",
  sangeet: "bg-sangeet",
  wedding: "bg-maroon",
  reception: "bg-reception",
};

const EventSection = ({ events }: EventSectionProps) => {
  return (
    <section id="events" className="section-padding bg-cream-dark relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-2">Wedding Celebrations</p>
          <h2 className="font-display text-maroon text-3xl md:text-5xl font-bold gold-shimmer">Events & Ceremonies</h2>
          <p className="font-body text-muted-foreground text-sm mt-2">Join us in every celebration</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-px" />

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full ${dotColorMap[event.colorTheme]} -translate-x-1.5 top-6 ring-4 ring-cream-dark z-10`} />

              <div className={`ml-12 md:ml-0 p-6 rounded-lg border-l-4 ${colorMap[event.colorTheme]} shadow-deep`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-foreground text-2xl font-semibold">{event.name}</h3>
                  </div>
                </div>

                <div className="space-y-2 font-body text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{event.venue}</span>
                  </div>
                  <p className="text-xs text-muted-foreground/70 pl-6">{event.venueAddress}</p>
                  {event.dressCode && (
                    <div className="flex items-center gap-2">
                      <Shirt className="w-4 h-4 text-gold" />
                      <span>Dress Code: {event.dressCode}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 mt-4">
                  {event.mapLink && (
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-body tracking-wider uppercase border border-gold text-gold rounded-sm hover:bg-gold/10 transition-colors"
                    >
                      Navigate →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
