import { motion } from "framer-motion";

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  relationHindi: string;
  photo?: string;
}

interface FamilySectionProps {
  brideFamily: FamilyMember[];
  groomFamily: FamilyMember[];
  brideName: string;
  groomName: string;
}

const FamilyMemberCard = ({ member, index }: { member: FamilyMember; index: number }) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gold overflow-hidden mb-3 shadow-gold">
      {member.photo ? (
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-cream-dark flex items-center justify-center">
          <span className="font-display text-maroon text-2xl font-bold">
            {member.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
    <h4 className="font-display text-foreground text-base md:text-lg font-semibold">{member.name}</h4>
    <p className="font-body text-muted-foreground text-xs">{member.relation}</p>
  </motion.div>
);

const FamilySection = ({ brideFamily, groomFamily, brideName, groomName }: FamilySectionProps) => {
  return (
    <section id="family" className="section-padding bg-cream relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-2">Our Families</p>
          <h2 className="font-display text-maroon text-3xl md:text-5xl font-bold gold-shimmer">Pillars of Our Families</h2>
          <p className="font-body text-muted-foreground text-sm mt-2">The ones who made us who we are</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <motion.h3
              className="font-display text-center text-maroon text-xl md:text-2xl font-semibold mb-8 pb-3 border-b border-gold/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {brideName}'s Family
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {brideFamily.map((member, i) => (
                <FamilyMemberCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              className="font-display text-center text-maroon text-xl md:text-2xl font-semibold mb-8 pb-3 border-b border-gold/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {groomName}'s Family
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {groomFamily.map((member, i) => (
                <FamilyMemberCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
