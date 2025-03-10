"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import ClearBlockerPopup from "./Popup"

const features = [
  {
    title: "Block the bad and keep the good.",
    description: "Shut out distracting desktop apps and websites and keep only what matters.",
    image: "/siteblocked.png", // side-by-side of blocked yt and unblocked yt
  },
  {
    title: "Schedule focus sessions.",
    description: "Lock in your productivity by scheduling distraction-proof work periods.",
    image: "/image.png", // one sc of app agaisnt desktop background
  },
]

const SideFeatures = () => {
  return (
    <section id="features" className="min-h-screen relative py-20 -mt-60 overflow-hidden text-stone-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-32 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-20"
              >
                {/* Image Section - alternates between left and right */}
                {index === 0 ? (
                  <div
                    className={`w-full md:w-[400px] rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02] order-1 ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <ClearBlockerPopup />
                  </div>
                ) : (
                  <div
                    className={`w-full md:w-[400px] rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02] order-1 ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full rounded-xl object-cover"
                      style={{ height: "auto" }}
                    />
                  </div>
                )}

                {/* Text Section - alternates between right and left */}
                <div
                  className={`mt-8 md:mt-0 p-6 bg-white rounded-lg border-2 border-black w-full md:w-1/2 order-2 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl font-bold">{feature.title}</h3>
                  <p className="text-lg md:text-xl mt-4">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SideFeatures

