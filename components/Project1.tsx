import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const Project1 = () => {
  return (
    <div id="recent" className='py-20'>
        <h1 className='heading'>
            WizdomCode - {' '}
            <span className='text-purple'>a recent project</span>
        </h1>

        <div className='my-20'>
            <img 
                src='/wizdomcode1.png'
                alt='wizdomcode1.png'
            />
        </div>

        <div className='mx-40'>
            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                WizdomCode
            </h1>

            <p className='lg:text-xl lg:font-normal font-light text-sm' style={{
                color: "#BEC1DD",
                margin: "1vh 0",
            }}>
                WizdomCode is an educational platform that offers a streamlined method of learning competitive programming. It is a comprehensive and modern solution to the traditional pains of finding suitable problems, tracking progress, and setting up development environments.
            </p>

            <div className='py-8'/>

            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                Key features
            </h1>

            <ul className="my-4 ml-12 space-y-2 text-gray-500 list-disc dark:text-gray-400 lg:text-xl lg:font-normal font-light text-sm" style={{
                color: "#BEC1DD",
            }}>
                <li>
                    <b>Problem bank</b>: Extensive database of over 250 competitive programming problems with test cases and solutions.
                </li>
                <li>
                    <b>Dynamic roadmap</b>: A streamlined path of learning goals enables users to learn topics in a logical progression and keeps track of user growth in terms of topics learned. 
                </li>
                <li>
                    <b>Integrated development environment</b>: Built-in code editor and file system allows users to create, delete, modify, and run code files against preset or custom test cases.
                </li>
                <li>
                    <b>Online judge</b>: Backend server runs user-submitted code against test cases and returns status of submissions.
                </li>
            </ul>
        </div>

        <div className='my-20'>
            <img 
                src='/wizdomcode7.png'
                alt='wizdomcode1.png'
                className='rounded-xl'
            />
        </div>
    </div>
  )
}

export default Project1