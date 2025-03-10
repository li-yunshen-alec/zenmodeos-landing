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
          <h2 className="text-center lowercase text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-16 font-bold">
            <TextGenerateEffect words="download the beta" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-black shadow-lg mb-12"
          >
            <h3 className="text-2xl font-bold mb-4">Early Access Version Available Now</h3>
            <p className="text-lg mb-6">
              Try the beta version that helps you stay focused by:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-lg">Blocking distracting desktop applications and websites</li>
              <li className="text-lg">Scheduling focus periods where you can&apos;t unblock distractions</li>
              <li className="text-lg">Disabling images across the web to reduce visual distractions</li>
              <li className="text-lg">Allowing audio-only mode for videos (listen without watching)</li>
            </ul>

            <div className="flex justify-center mt-8 gap-4">
              <MagicButton title="Download Beta" icon={<FaDownload />} position="left" />

              <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer">
                <MagicButton title="Support the project" icon={<FaHeart />} position="left" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='w-full flex mt-20 md:flex-row flex-col justify-between items-center'>
          <p className='md:text-base text-sm md:font-normal font-light'>Built with <b>Next.js</b> and <b>Tailwind CSS</b></p>

          <div className='flex items-center md:gap-3 gap-6'>
              {socialMedia.map((profile) => (
                  <a key={profile.img} href={profile.link}>
                      <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                          <img
                              src={profile.img} 
                              alt={String(profile.id)} 
                              width={20} height={20}
                          />
                      </div>
                  </a>
              ))}
          </div>
      </div>
    </section>
  )
}

export default DownloadBeta

