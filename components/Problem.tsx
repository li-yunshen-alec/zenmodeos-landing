"use client"

import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { motion } from "framer-motion"

const Problems = () => {
  return (
    <section id="problems" className="min-h-screen relative py-40 overflow-hidden text-stone-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center lowercase text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-16 font-bold">
            <TextGenerateEffect words="browsers make money when you fall prey to distraction." />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-black shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">The Distraction Business Model</h3>
              <p className="text-lg">
                Mainstream web browsers partner with search engines to generate revenue every time you open a new tab
                and make a search. They profit from the ads you see and click on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-black shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Designed to Distract</h3>
              <p className="text-lg">
                They&apos;re financially incentivized to keep you browsing aimlessly. The more rabbit holes you fall into,
                the more searches you make, and the more money they earn.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-black shadow-lg md:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">Your Focus Is Not Their Priority</h3>
              <p className="text-lg">
                Traditional browsers have no incentive to help you stay focused or use the internet productively. In
                fact, they benefit when your attention is fragmented and scattered across multiple tabs and sites.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-red-50 rounded-xl border-2 border-black shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2 text-center">
              It&apos;s Time For A Browser That Works For You, Not Against You
            </h3>
            <p className="text-lg text-center">
              Clear is built with a fundamentally different approach: we prioritize your focus and productivity above
              all else.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Problems

