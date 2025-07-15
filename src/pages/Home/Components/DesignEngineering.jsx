import React from "react";
import strategy from "/assets/strategy.png";
import branding from "/assets/branding.png";
import development from "/assets/development.png";
import webDesign from "/assets/web-design.png";

const DesignEngineering = () => {
  return (
    <div className="bg-[#ddcfc6] py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <h1 className="text-4xl text-center font-bold text-zinc-900 mb-6">
          Epic Design and Engineering
        </h1>
        <p className="lg:w-1/2 mx-auto text-center text-zinc-900 mb-12">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center p-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <img className="w-10 h-10" src={strategy} alt="strategy" />
            </div>
            <h3 className="text-2xl font-medium text-zinc-900 mb-2">
              Strategy
            </h3>
            <p className="italic text-zinc-900 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-white">
            <div className="w-16 h-16 bg-[#F0AA00] rounded-full flex items-center justify-center mb-4">
              <img className="w-10 h-10 invert" src={branding} alt="strategy" />
            </div>
            <h3 className="text-2xl font-medium text-zinc-900 mb-2">
              Branding
            </h3>
            <p className="italic text-zinc-900 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <img className="w-10 h-10" src={development} alt="strategy" />
            </div>
            <h3 className="text-2xl font-medium text-zinc-900 mb-2">
              Development
            </h3>
            <p className="italic text-zinc-900 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-[#F0AA00]">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <img className="w-10 h-10" src={webDesign} alt="strategy" />
            </div>
            <h3 className="text-2xl font-medium text-zinc-900 mb-2">
              Web Design
            </h3>
            <p className="italic text-zinc-900 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignEngineering;
