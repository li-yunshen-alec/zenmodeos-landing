"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const features = [
  {
    title: "Clear puts your rational mind in full control.",
    description: "Restrictions on porn are put in place by your rational mind and enforced by Clear.",
    image: "/Screenshot (547).png", // congrats message 
  },
]

const Features = () => {
  return (
    <section id="features" className="min-h-screen relative py-20 overflow-hidden text-stone-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-60 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="text-amber-500 my-6 text-center lowercase text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold">
                  {feature.title}
                </div>

                <p className="text-center mb-16 text-sm md:text-lg lg:text-2xl text-black-100">
                  {feature.description}
                </p>
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border-2 border-black shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
                  <Image 
                    src={feature.image || "/placeholder.svg"} 
                    alt={feature.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
