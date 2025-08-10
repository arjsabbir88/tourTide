import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Globe } from "lucide-react";

// AboutUs component for a Tour Package Management app
// - Tailwind CSS utility classes used for styling
// - Framer Motion used for subtle entrance/hover animations
// - Icons from lucide-react (install with `npm i lucide-react`)
// Usage: <AboutUs /> or pass props to customize content

export default function About({
  subtitle = "We craft unforgettable journeys",
  description = "At Wanderly (replace with your name), we build curated tour packages that turn travel dreams into real experiences. From family trips to bespoke adventures, our team manages everything — planning, booking, and support — so travellers can just enjoy the ride.",
  stats = [
    { id: 1, label: "Tours Created", value: "1.2k+", icon: Globe },
    { id: 2, label: "Happy Travellers", value: "25k+", icon: Users },
    { id: 3, label: "Destinations", value: "120+", icon: MapPin },
  ],
  ctaText = "Explore Packages",
  imgUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
}) {
  return (
    <section className="w-full bg-gradient-to-r from-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left : Text content */}
          <div>
            

            <motion.h3
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-3 text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight"
            >
              {subtitle}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-gray-700 text-base lg:text-lg max-w-prose"
            >
              {description}
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              {stats.map((s) => (
                <motion.div
                  key={s.id}
                  whileHover={{ y: -6 }}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-slate-100 rounded-2xl px-4 py-3 shadow-sm"
                >
                  <span className="p-2 rounded-full bg-indigo-50">
                    <s.icon className="w-5 h-5 text-[#FF204E]" />
                  </span>
                  <div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                    <div className="text-lg font-semibold text-slate-900">{s.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8"
            >
              <button className="inline-flex items-center gap-3 bg-[#FF204E] text-white px-5 py-3 rounded-2xl font-medium shadow-md hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span>{ctaText}</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 text-xs text-slate-400"
            >
              Trusted by small agencies and big tour operators alike.
            </motion.div>
          </div>

          {/* Right : Image + card */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={imgUrl} alt="travel" className="w-full h-80 object-cover" />
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-6 w-64 bg-white rounded-2xl p-4 border border-slate-100 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Featured Destination</div>
                  <div className="font-semibold text-slate-900">Bali, Indonesia</div>
                  <div className="text-xs text-slate-400 mt-1">7 days • 6 nights • All-inclusive options</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative gradient round */}
            <div className="hidden lg:block absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 to-emerald-100 opacity-60 blur-3xl" />
          </div>
        </div>

        {/* Small footer note / values row */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-indigo-50">
              <Globe className="w-5 h-5 text-[#FF204E]" />
            </div>
            <div>
              <div className="text-sm text-slate-500">Our Promise</div>
              <div className="font-semibold text-slate-900">Transparent pricing, local experts, 24/7 support</div>
            </div>
          </div>

          <div className="text-sm text-slate-500">Want this section to match your brand colors or change copy? Pass props or ask me to customize.</div>
        </div>
      </div>
    </section>
  );
}
