import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import strategy from "/assets/strategy.png";
import branding from "/assets/branding.png";
import development from "/assets/development.png";
import webDesign from "/assets/web-design.png";

const DesignEngineering = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-[#ddcfc6] py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <h1
          className="text-4xl text-center font-bold text-zinc-900 mb-6"
          data-aos="fade-up"
        >
          Epic Design and Engineering
        </h1>
        <p
          className="lg:w-1/2 mx-auto text-center text-zinc-900 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Strategy */}
          <div
            className="flex flex-col items-center justify-center p-8"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
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

          {/* Branding */}
          <div
            className="flex flex-col items-center justify-center p-8 bg-white"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="w-16 h-16 bg-[#F0AA00] rounded-full flex items-center justify-center mb-4">
              <img className="w-10 h-10 invert" src={branding} alt="branding" />
            </div>
            <h3 className="text-2xl font-medium text-zinc-900 mb-2">
              Branding
            </h3>
            <p className="italic text-zinc-900 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          {/* Development */}
          <div
            className="flex flex-col items-center justify-center p-8"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <img className="w-10 h-10" src={development} alt="development" />
            </div>
            <h3 className="text-2xl font-medium text-zinc-900 mb-2">
              Development
            </h3>
            <p className="italic text-zinc-900 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          {/* Web Design */}
          <div
            className="flex flex-col items-center justify-center p-8 bg-[#F0AA00]"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <img className="w-10 h-10" src={webDesign} alt="web design" />
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
