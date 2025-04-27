import React from 'react';
import BrowserWithTooManyTabs from './ui/BrowserWithTooManyTabs';
import AddictiveVideoApp from './ui/AddictiveVideoApp';
import AdultSiteBrowser from './ui/AdultSiteBrowser';
import BrainIcon from './ui/BrainIcon';

const Benefits = () => {
  return (
    <div className="py-40">
      <section className="">
        <div className="max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-20 lg:py-16 flex flex-row justify-between">
            <div className="mr-auto place-self-center">
                <h1 className="text-amber-500 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  porn hijacks your brain.
                </h1>
                <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl max-w-lg">
                It&apos;s engineered to exploit your brain&apos;s wiring, flooding you with endless novelty and instant dopamine. 
                The longer you stay hooked, the more your energy, confidence, and focus slip away.
                </p>
            </div>
            <div className="lg:mt-0 flex-shrink-0">
                <AdultSiteBrowser />
            </div>                
        </div>
      </section>

      <section className="">
        <div className="max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-40 lg:py-16 flex flex-row justify-between">
            <div className="lg:mt-0 flex-shrink-0 mr-auto">
                <BrainIcon />
            </div>                

            <div className="place-self-center">
                <h1 className="text-amber-500 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  let&apos;s be real: self-control is hard.
                </h1>
                <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl max-w-lg">
                  Your rational mind wants to quit, but it&apos;s not always the one in control.
                  Many of us have a hard time resisting our impulses.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;