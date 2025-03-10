"use client"

import type React from "react"

import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react"

const FinalCTA = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="min-h-screen relative py-20 overflow-hidden text-stone-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center lowercase text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-16 font-bold">
            <TextGenerateEffect words="join the waitlist" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-black shadow-lg mb-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Be First to Experience the Full Version</h3>
            <p className="text-lg mb-6">
              Sign up to get early access when we launch the complete AI-powered browser. We&apos;ll notify you as soon as
              it&apos;s ready.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow p-3 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button type="submit" className="md:w-auto">
                    <MagicButton title="Join Waitlist" icon={<FaEnvelope />} position="left" />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-green-50 rounded-lg border-2 border-green-500"
              >
                <p className="text-lg font-bold text-green-700">Thank you for joining our waitlist!</p>
                <p>We&apos;ll notify you when the full version is ready.</p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="p-6 bg-amber-50 rounded-xl border-2 border-black shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">Try the Beta</h3>
              <p className="text-lg mb-4">Experience the current version while you wait</p>
              <a href="#download" className="text-blue-600 hover:underline font-bold">
                Download Now
              </a>
            </div>

            <div className="p-6 bg-amber-50 rounded-xl border-2 border-black shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">Support Development</h3>
              <p className="text-lg mb-4">Help us build faster with your contribution</p>
              <a href="#donate" className="text-blue-600 hover:underline font-bold">
                Donate
              </a>
            </div>

            <div className="p-6 bg-amber-50 rounded-xl border-2 border-black shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-lg mb-4">Follow our progress on social media</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:underline font-bold">
                  Twitter
                </a>
                <a href="#" className="text-blue-600 hover:underline font-bold">
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

