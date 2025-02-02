import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 mb-[100px] md:mb-0' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img 
                src='/footer-grid.svg'
                alt='grid'
                className='w-full h-full opacity-50'
            />
        </div>
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Looking to get in touch?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>I&apos;m not currently looking for any new opportunities, but my inbox is always open!</p>
            <a href='mailto:yunshen08@gmail.com'>
                <MagicButton 
                    title="Say Hello"
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>

            <div className='w-full flex mt-16 md:flex-row flex-col justify-between items-center'>
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
        </div>
    </footer>
  )
}

export default Footer