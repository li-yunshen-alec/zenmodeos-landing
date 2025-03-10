"use client"

import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaHeart } from "react-icons/fa"
import { motion } from "framer-motion"

const Donate = () => {
  return (
    <section id="donate" className="min-h-screen relative py-20 overflow-hidden text-stone-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center lowercase text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-16 font-bold">
            <TextGenerateEffect words="support the future of healthy browsing" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-black shadow-lg mb-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Help Us Build This Revolutionary Browser</h3>
            <p className="text-lg mb-6">
              We&apos;re creating a browser that prioritizes your focus and productivity instead of exploiting your
              attention. This is a fundamentally different approach to web browsing that puts you back in control.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded-lg border-2 border-black bg-amber-50">
                <h4 className="font-bold text-xl mb-2">AI Development</h4>
                <p>Fund the AI systems that will power contextual awareness and focus protection</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded-lg border-2 border-black bg-amber-50">
                <h4 className="font-bold text-xl mb-2">Cross-Platform</h4>
                <p>Support development for Windows, Mac, iOS, and Android</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded-lg border-2 border-black bg-amber-50">
                <h4 className="font-bold text-xl mb-2">Privacy Focus</h4>
                <p>Help us build with privacy-first principles, unlike ad-driven browsers</p>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8">
              <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer">
                <MagicButton title="Support on Kickstarter" icon={<FaHeart />} position="left" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-red-50 rounded-xl border-2 border-black shadow-lg text-center"
          >
            <h3 className="text-xl font-bold mb-2">Every Contribution Makes a Difference</h3>
            <p className="text-lg">
              Your support helps us create a browser that works for you, not advertisers. Join us in revolutionizing how
              we interact with the web.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Donate

