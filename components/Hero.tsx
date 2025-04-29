"use client"
import Image from "next/image"
import { Clock, Focus, Brain } from "lucide-react"
import { motion } from "framer-motion"
import MagicButton from "./ui/MagicButton"
import { FaDownload, FaLocationArrow } from "react-icons/fa6"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-100 w-full">
      <div className="container px-4 py-16 md:py-24 lg:py-32 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 lg:ml-32">
            <div className="space-y-4">
              <h1 className="font-bold text-black leading-tight text-[40px] md:text-6xl lg:text-8xl tracking-tighter">
                Fuck p*rn.
              </h1>

              <p className="text-center md:text-left text-sm md:text-lg lg:text-2xl max-w-md text-black">
                Clear is the only app that blocks that shit for real.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <MagicButton title="Download now" icon={<FaDownload />} position="right" />
            </div>
          </div>

          {/* Right content - App screenshot with color highlights that always stay behind the edges */}
          <div className="relative flex justify-center">
            {/* Container for image and highlights with relative positioning */}
            <div className="relative w-full max-w-[320px] flex items-center justify-center">
              {/* Color highlights positioned absolutely within the container */}
              <div className="absolute w-[140%] h-[140%] pointer-events-none">
                <div className="absolute top-[5%] left-[5%] w-[30%] h-[30%] bg-yellow-300 rounded-full opacity-70 blur-xl"></div>
                <div className="absolute bottom-[5%] right-[5%] w-[35%] h-[35%] bg-blue-300 rounded-full opacity-70 blur-xl"></div>
                <div className="absolute top-[40%] right-[0%] w-[25%] h-[25%] bg-green-300 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute bottom-[30%] left-[10%] w-[20%] h-[20%] bg-purple-300 rounded-full opacity-40 blur-xl"></div>
              </div>

              {/* The image positioned on top of the highlights */}
              <div className="relative z-10 w-full shadow-xl">
                <Image
                  src="/hero.png"
                  alt="Clear app blocking 10,000,000+ porn sites"
                  width={400}
                  height={800}
                  className="object-contain w-full"
                />
              </div>
            </div>

            {/* Stats floating around */}
            <motion.div
              className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm font-bold">10M+</p>
              <p className="text-xs text-gray-600">Sites blocked</p>
            </motion.div>

            <motion.div
              className="absolute bottom-10 -left-4 bg-white p-3 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-sm font-bold">99.9%</p>
              <p className="text-xs text-gray-600">Success rate</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="w-full bg-stone-50 py-6 border-t border-b border-stone-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center justify-center text-center p-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 mb-2">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <p className="font-bold text-lg md:text-xl">1,000+</p>
              <p className="text-xs md:text-sm text-gray-600">Hours reclaimed</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mb-2">
                <Focus className="h-5 w-5 text-blue-600" />
              </div>
              <p className="font-bold text-lg md:text-xl">44%</p>
              <p className="text-xs md:text-sm text-gray-600">Improved focus</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 mb-2">
                <Brain className="h-5 w-5 text-green-600" />
              </div>
              <p className="font-bold text-lg md:text-xl">30+</p>
              <p className="text-xs md:text-sm text-gray-600">Days avg. streak</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-3">
              <motion.div
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mb-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <svg
                  className="h-5 w-5 text-purple-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H9.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9H15.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <p className="font-bold text-lg md:text-xl">56%</p>
              <p className="text-xs md:text-sm text-gray-600">Reduced anxiety</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
