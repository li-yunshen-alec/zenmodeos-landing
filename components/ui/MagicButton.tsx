"use client"

import type React from "react"
import { motion } from "framer-motion"

interface MagicButtonProps {
  title: string
  icon?: React.ReactNode
  position?: "left" | "right"
  otherClasses?: string
  handleClick?: () => void
}

const MagicButton = ({ title, icon, position = "left", otherClasses, handleClick }: MagicButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-black rounded-lg group bg-amber-500 border-2 border-black ${otherClasses || ''}`}
      onClick={handleClick}
    >
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
      <div className="flex items-center gap-2">
        {position === "left" && icon}
        <span>{title}</span>
        {position === "right" && icon}
      </div>
    </motion.button>
  )
}

export default MagicButton

