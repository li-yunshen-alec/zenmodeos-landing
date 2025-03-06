"use client"

import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='yellow' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='red' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='orange' />
      </div>

      <div className="h-screen w-full bg-amber-100 flex items-center justify-center absolute top-0 left-0">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <TextGenerateEffect
            className='lowercase text-center text-[40px] md:text-6xl lg:text-8xl tracking-tighter max-w-4xl'
            words='KILL DISTRACTIONS. REGAIN FOCUS.'
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-md text-black-100'>
            Clear blocks the bad stuff and keeps the good stuff.
          </p>

          <a href='#about'>
            <MagicButton
              title='Download for free'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;