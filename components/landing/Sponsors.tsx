"use client";

import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Google",
    logo: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 md:w-10 md:h-10"
      >
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 md:w-10 md:h-10"
      >
        <path d="M0 0h11.377v11.372H0zM12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zM12.623 12.623H24V24H12.623z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    logo: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <path d="M18.706 8.527c-1.396 0-2.48.514-3.111 1.4-1.282-1.042-2.73-1.4-4.184-1.4-2.585 0-4.321 1.683-4.321 4.505 0 2.222 1.34 3.666 3.195 3.666 1.6 0 2.825-1.006 3.447-2.227.189.65.748 1.258 1.623 1.258 1.277 0 2.295-.913 2.295-2.613v-4.59h-2.19v4.442c0 .668-.292 1.056-.84 1.056-.566 0-.84-.427-.84-1.096V9.404h-2.152v6.23h2.152v-1.127c.563.805 1.547 1.246 2.766 1.246 2.112 0 3.737-1.433 3.737-4.148 0-1.748-1.041-3.078-2.677-3.078h.099zm-4.996 6.32c-.893 0-1.49-.668-1.49-1.906 0-1.298.575-1.928 1.47-1.928.914 0 1.49.652 1.49 1.928 0 1.246-.597 1.906-1.47 1.906zm10.282-3.868c-.979-1.31-2.295-2.022-3.957-2.022-2.316 0-3.926 1.493-4.168 3.53l2.09.204c.146-1.037.956-1.815 2.067-1.815.897 0 1.579.467 1.579 1.352v.63h-1.48c-2.25 0-3.415 1.038-3.415 2.749 0 1.54 1.122 2.506 2.805 2.506 1.334 0 2.375-.685 2.756-1.574l.115 1.39h1.996v-5.244c0-1.168-.157-1.556-.388-1.706zm-1.87 5.166c-.326.63-.996 1.038-1.82 1.038-.934 0-1.533-.445-1.533-1.334 0-.964.67-1.54 1.933-1.54h1.42v1.836zm-14.77-5.185C6.315 9.878 5.228 9.208 4.09 9.208c-.287 0-.584.03-.896.101L3 9.387v1.89l.348-.052c.231-.033.472-.052.7-.052 1.353 0 1.766.726 1.766 2.093v4.298h2.152V9.404H5.815v1.556h.05c.412-.87 1.011-1.39 1.83-1.39.18 0 .341.018.497.05v-2.09c-.198-.063-.398-.102-.693-.081-.062-.008-.096-.035-.147-.057z" />
        <path d="M12.986 21.08c3.279-.589 6.27-2.185 8.784-4.54l1.636 1.458c-2.906 2.735-6.38 4.606-10.198 5.318l-.222-1.236zm-1.728-1.688c-1.373-.133-2.618-.46-3.791-.971l.654-1.34c1.07.464 2.193.753 3.428.875l-.291 1.436zm-3.1-2.92c-.157.172-.34.33-.524.475l.178.188c1.33.197 2.03.882 2.03 1.838 0 1.452-1.365 2.133-3.235 1.847l.228-1.297c1.086.166 1.63-.16 1.63-.647 0-.326-.184-.523-.622-.589l-.994-.148c-1.41-.212-2.1-.967-2.1-2.023 0-1.34 1.258-2.071 3.016-1.923l-.15.932c-1.077-.101-1.536.216-1.536.634 0 .332.203.535.65.6l.995.148c.159.023.332.052.504.096l-.07-.134z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    logo: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 md:w-8 md:h-8"
      >
        <path d="M11.996 0c2.046 0 3.705 1.66 3.705 3.705v3.784h-3.705a3.705 3.705 0 110-7.489zm3.705 11.273v-3.784h3.705a3.705 3.705 0 110 7.49h-3.705v-3.706zm-7.41 0c0-2.046 1.66-3.705 3.705-3.705h3.705v3.705a3.705 3.705 0 11-7.41 0zm7.41 7.41c0 2.045-1.659 3.704-3.705 3.704a3.704 3.704 0 110-7.409h3.705v3.705zm0-3.705h-3.705a3.705 3.705 0 110-7.409h3.705v7.408z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    logo: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 md:w-10 md:h-10"
      >
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l10.706-.826c.72-.054 1.19.103 1.19.826v15.02c0 .653-.448 1.102-1.12.98L4.659 18.72c-.8-.13-1.15-.653-1.15-1.28V5.374c0-.784.382-1.214.95-1.166zm3.322 12.835c0 .28.21.514.864.514.373 0 .793-.07 1.073-.187l5.69-2.286c.28-.117.42-.327.42-.584V7.07c0-.28-.21-.513-.863-.513a2.38 2.38 0 00-1.074.21L8.201 9.03c-.28.117-.42.304-.42.584v7.429z" />
      </svg>
    ),
  },
  {
    name: "Slack",
    logo: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 md:w-10 md:h-10"
      >
        <path d="M6 15a2.5 2.5 0 102.5 2.5V15H6zm2.5-1.25a2.5 2.5 0 100-5h-1.25v2.5a2.5 2.5 0 001.25 2.5zm1.25-11.25a2.5 2.5 0 10-2.5 2.5h2.5V2.5zm2.5 1.25a2.5 2.5 0 100 5h1.25V6.25a2.5 2.5 0 00-1.25-2.5zm6.25 5a2.5 2.5 0 10-2.5-2.5v2.5h2.5zm-2.5 1.25a2.5 2.5 0 100 5h1.25v-2.5a2.5 2.5 0 00-1.25-2.5zm0 11.25a2.5 2.5 0 102.5-2.5h-2.5v2.5zm-2.5-1.25a2.5 2.5 0 100-5h-1.25v2.5a2.5 2.5 0 001.25 2.5z" />
      </svg>
    ),
  },
];

export default function Sponsors() {
  return (
    <section className="py-24 px-6 bg-black text-white relative">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
            Partners
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            OUR <span className="text-red-600">PARTNERS</span>
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
            Organizations that share our vision for a dauntless future.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-neutral-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
              title={sponsor.name}
            >
              {sponsor.logo}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-8 space-y-6 border-t border-white/5 max-w-2xl mx-auto">
          <p className="text-neutral-400 text-lg">
            Want to partner with TEDxCCET?
          </p>
          <button className="px-8 py-3 rounded-full border border-red-600 text-red-600 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 text-sm">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
