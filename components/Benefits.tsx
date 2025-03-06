import React from 'react';

const Benefits = () => {
  return (
    <>
      <section className="">
        <div className="max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-20 lg:py-16 flex flex-row justify-between">
            <div className="mr-auto place-self-center">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black-100">ELIMINATE DISTRACTIONS 🚫</h1>
                <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl max-w-lg">Minimize digital noise and concentrate on your priorities. ZenModeOS blocks apps and websites that drain your focus so you can go after what you truly want to do.</p>
            </div>
            <div className="lg:mt-0 flex-shrink-0">
                <img src="benefits1.jpg" alt="mockup" className="h-[60vh] rounded-xl border-black border-2" />
            </div>                
        </div>
      </section>

      <section className="">
        <div className="max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-40 lg:py-16 flex flex-row justify-between">
            <div className="lg:mt-0 flex-shrink-0 mr-auto">
                <img src="benefits1.jpg" alt="mockup" className="h-[60vh] rounded-xl border-black border-2" />
            </div>                

            <div className="place-self-center">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black-100">GET MORE FREE TIME ⏳</h1>
                <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl max-w-lg">Spend less time on distractions, and more time doing what you love.</p>
            </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-20 lg:py-16 flex flex-row justify-between">
            <div className="mr-auto place-self-center">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black-100">ENJOY MENTAL CLARITY 💡</h1>
                <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl max-w-lg">Experience less cognitive overload and more peace of mind.</p>
            </div>
            <div className="lg:mt-0 flex-shrink-0">
                <img src="benefits1.jpg" alt="mockup" className="h-[60vh] rounded-xl border-black border-2" />
            </div>                
        </div>
      </section>
    </>
  );
};

export default Benefits;