"use client"
import Image from "next/image"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa6"

const Hero = () => {
  return (
    <>
      <div className="h-screen pb-20 pt-36 overflow-hidden">
        <div className="h-screen w-full bg-stone-100 flex items-center justify-center absolute top-0 left-0">
          {/* Left collage - Distractions */}
          <div className="hidden md:block absolute left-0 h-full w-1/3 pointer-events-none">
            <div className="relative h-full w-full left-28">
              {/* Distraction images with converging effect */}
              <div className="absolute top-[20%] left-[10%] w-[180px] h-[236px] rotate-[-8deg] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-10 border-black border-2">
                <Image
                  src="/image1.jpg"
                  alt="Social media scrolling"
                  width={180}
                  height={236}
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[35%] left-[30%] w-[160px] h-[160px] rotate-[5deg] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-20 border-black border-2">
                <Image
                  src="/image2.jpg"
                  alt="Video streaming app"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="hidden absolute top-[45%] left-[15%] w-[160px] h-[240px] rotate-[-5deg] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-30">
                <Image
                  src="/image3.jpg"
                  alt="Gaming distraction"
                  width={160}
                  height={240}
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[55%] left-[20%] w-[140px] h-[140px] rotate-[-5deg] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-40 border-black border-2">
                <Image
                  src="/image4.jpg"
                  alt="Endless notifications"
                  width={140}
                  height={140}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile collage (visible only on mobile) */}
          <div className="md:hidden absolute top-20 w-full flex justify-center pointer-events-none">
            <div className="relative h-[200px] w-full max-w-[320px]">
              <div className="absolute top-0 left-[5%] w-[100px] h-[100px] rotate-[-8deg] shadow-lg rounded-xl overflow-hidden z-10">
                <Image
                  src="/image1.jpg"
                  alt="Social media scrolling"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[20px] right-[5%] w-[100px] h-[100px] rotate-[8deg] shadow-lg rounded-xl overflow-hidden z-20">
                <Image
                  src="/benefits1.jpg"
                  alt="Productivity app"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-[25%] w-[90px] h-[90px] rotate-[-5deg] shadow-lg rounded-xl overflow-hidden z-30">
                <Image
                  src="/image5.jpg"
                  alt="Video streaming"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-[10px] right-[25%] w-[90px] h-[90px] rotate-[5deg] shadow-lg rounded-xl overflow-hidden z-40">
                <Image
                  src="/benefits1.jpg"
                  alt="Focus timer"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col items-center justify-center mt-[100px] md:mt-0 z-40">
            <div className="font-bold my-6 text-black leading-tight lowercase text-center text-[40px] md:text-6xl lg:text-8xl tracking-tighter max-w-4xl">
              make the web <br /> 
              <span className="text-amber-500">fun again.</span>
            </div>

            <p className="text-center mb-4 text-sm md:text-lg lg:text-2xl max-w-md text-black-100">
              Control 100% of what you see and watch, with Clear.
            </p>

            <a href="#about" className="scale-110 mt-4">
              <MagicButton title="Download for free" icon={<FaLocationArrow />} position="right"/>
            </a>
          </div>

          {/* Right collage - Productivity */}
          <div className="hidden md:block absolute right-0 h-full w-1/3 pointer-events-none">
            <div className="relative h-full w-full right-28">
              {/* Productivity images */}
              <div className="absolute top-[20%] right-[15%] w-[180px] h-[236px] rotate-[8deg] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-10 border-black border-2">
                <Image
                  src="/heroproductivity.png"
                  alt="Note-taking app"
                  width={180}
                  height={236}
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[30%] right-[30%] w-[160px] h-[160px] rotate-[-5deg] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-20 border-black border-2">
                <Image
                  src="/benefits1.jpg"
                  alt="Calendar and planning"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[50%] right-[10%] w-[200px] h-[150px] rotate-[3deg] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-30 border-black border-2">
                <Image
                  src="/heroproductivity2.png"
                  alt="Focus timer"
                  width={200}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div className="hidden absolute top-[65%] right-[25%] w-[140px] h-[180px] rotate-[-7deg] shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 z-40">
                <Image
                  src="/heroproductivity.png"
                  alt="Productive workspace"
                  width={140}
                  height={180}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-60 w-full aspect-[16/9] rounded-xl overflow-hidden border-2 border-black shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
        <Image 
          src={"/zenmodehero.jpg"} 
          alt={"zenmodehero.jpg"} 
          fill 
          className="object-cover" 
        />
      </div>
    </>
  )
}

export default Hero

