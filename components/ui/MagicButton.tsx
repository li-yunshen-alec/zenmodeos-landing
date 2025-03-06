import React from 'react'

const MagicButton = ({ title, icon, position, handleClick, otherClasses } : {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative focus:outline-none md:w-60 !md:mt-4 !mt-4" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg" />
      <div className={`px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
        {title}
      </div>
    </button>
  )
}

export default MagicButton