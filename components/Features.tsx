"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const features = [
  {
    title: "it's time for a browser that works for you, not against you.",
    description: "Clear empowers you to take complete control over what you see on the Internet.",
    image: "/siteblocked.png", // side-by-side of blocked yt and unblocked yt 
  },
  {
    title: "Block the bad and keep the good.",
    description: "Shut out distracting desktop apps and websites and keep only what matters.",
    image: "/siteblocked.png", // side-by-side of blocked yt and unblocked yt 
  },
  {
    title: "Schedule focus sessions.",
    description: "Lock in your productivity by scheduling distraction-proof work periods.",
    image: "/scheduleblock.png", // one sc of app agaisnt desktop background
  },
  {
    title: "Activate visual detox mode.",
    description: "Disable images across the web to keep your view clean and your mind clear of visual noise.",
    image: "/detox.png", // sc of youtube home
  },
  {
    title: "Enjoy an audio-only experience.",
    description: "Mute videos while preserving crisp, clear audio for an uninterrupted workflow.",
    image: "/vidblock.png", // sc of youtube vid
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
