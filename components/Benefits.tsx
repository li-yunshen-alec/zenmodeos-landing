import React from 'react';

const Benefits = () => {
  return (
    <div className="py-40">
      <section className="">
        <div className="max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-20 lg:py-16 flex flex-row justify-between">
            <div className="mr-auto place-self-center">
                <h1 className="text-amber-500 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">browsers are designed to distract.</h1>
                <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl max-w-lg">Web browsers make money when you browse aimlessly. The more rabbit holes you fall into, the more searches you make, the more money they earn.</p>
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
                <h1 className="text-amber-500 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">it&apos;s not just browsers.</h1>
                <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl max-w-lg">Every app you use and every site you visit compete to show you the most addicting content. Your well-being is not their priority.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;