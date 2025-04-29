"use client"

import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaDownload, FaHeart } from "react-icons/fa"
import { motion } from "framer-motion"
import { socialMedia } from "@/data"

const DownloadBeta = () => {
  return (
    <section id="download" className="relative pt-20 pb-10 overflow-hidden text-stone-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-amber-500 text-center lowercase text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-16 font-bold">
            download clear for windows
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-black shadow-lg mb-12"
          >
            <h3 className="text-2xl font-bold mb-4">Take back control—get started with Clear today</h3>
            <p className="text-lg mb-6">
              Block porn and distractions for good. Clear empowers your rational mind to set unbreakable boundaries, so you can focus on what matters most.
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
              <li>Block 10,000,000+ adult sites automatically</li>
              <li>Set restriction periods that can&apos;t be bypassed</li>
              <li>Fine-tune your web and app access</li>
              <li>Built for privacy—your data stays on your device</li>
            </ul>

            <div className="flex justify-center mt-8 gap-4">
              <MagicButton title="Download for Windows" icon={<FaDownload />} position="left" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DownloadBeta

