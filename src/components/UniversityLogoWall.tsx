import { motion } from 'motion/react';

const ROW_A = [
  'Seoul National University',
  'KAIST',
  'University of Toronto',
  'UBC',
  'University of Malaga',
  'Universiti Malaya',
  'Yonsei University',
  'McGill University',
];

const ROW_B = [
  'University of Cyprus',
  'University of Amsterdam',
  'Simon Fraser University',
  'Erasmus University Rotterdam',
  'University of Nicosia',
  'Korea University',
  'University of Waterloo',
  'Maastricht University',
];

const Badge = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-blue-200 bg-white text-blue-700 font-semibold text-sm whitespace-nowrap shadow-sm hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-default">
    <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
    {name}
  </span>
);

export default function UniversityLogoWall() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold uppercase tracking-widest text-xs mb-4">
            Our University Network
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Partner <span className="text-gradient-blue">Universities</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We work with top-ranked institutions across Asia, Europe, and North America to find you the perfect academic home.
          </p>
        </motion.div>
      </div>

      {/* Row A — scrolls left */}
      <div className="overflow-hidden mb-4 py-1">
        <div className="animate-marquee inline-flex gap-4 pl-4">
          {[...ROW_A, ...ROW_A].map((name, i) => (
            <Badge key={`a-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Row B — scrolls right */}
      <div className="overflow-hidden py-1">
        <div className="animate-marquee-reverse inline-flex gap-4 pl-4">
          {[...ROW_B, ...ROW_B].map((name, i) => (
            <Badge key={`b-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
