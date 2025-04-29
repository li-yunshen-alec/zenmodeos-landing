import React from 'react';

const features = [
  {
    title: "schedule your restriction periods.",
    description: "Disable porn on command with unbreakable restriction periods.",
    image: "/schedule.png", // scheduling ui
  },
  {
    title: "automatically block 10,000,000+ porn sites.",
    description: "Customize your settings to shut out distracting sites and keep only what matters.",
    image: "/adultsettings.png", // adult site blocking ui 
  },
  {
    title: "fine-tune your web feed.",
    description: "Set custom filters to take granular control over what you see.",
    image: "/sitefilter.png",
  },
  {
    title: "disable distracting apps.",
    description: "Disable apps and games to clear your mental space.",
    image: "/appblock.png", // sc of youtube home
  },
]

const Features2 = () => {
  return (
    <div className="py-40">
      {features.map((feature, idx) => (
        <section key={idx} className="">
          <div className={`max-w-6xl px-4 py-8 mx-auto lg:gap-8 xl:gap-20 lg:py-16 flex flex-row justify-between ${
            idx % 2 === 1 ? 'flex-row-reverse' : ''
          }`}>
            <div className="mr-auto place-self-center max-w-xl">
              <h1 className="text-amber-500 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                {feature.title}
              </h1>
              <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">
                {feature.description}
              </p>
            </div>
            <div className="lg:mt-0 flex-shrink-0 flex items-center justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Features2; 