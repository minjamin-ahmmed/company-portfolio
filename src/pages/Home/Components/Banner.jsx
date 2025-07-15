import React from "react";
import bannerImg from "/assets/banner-image.jpg";
import bannerImgMask from "/assets/banner-background-mask.png";
const Banner = () => {
  return (
    <div className="bg-[#ddcfc6] py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left side text content */}
        <div className="bg-white px-10 py-16 max-w-7xl relative mt-72 lg:mt-96">
          <h1 className="text-4xl font-bold text-zinc-900 mb-6">
            We Create Websites
          </h1>
          <p className="lg:w-1/2 text-zinc-900 mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
          <button className="bg-zinc-900 text-white px-8 py-3 rounded-md font-semibold">
            VIEW PORTFOLIO
          </button>

          <div className="absolute -top-88 lg:-top-96 lg:-right-32">
         
            <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
        
              <div className="absolute -top-12 left-12 w-full h-[400px] lg:h-[650px] bg-[#F0AA00] z-0" />

       
              <img
                src={bannerImgMask}
                alt="mask"
                className="absolute top-12 -left-10 lg:-left-12 w-full h-full object-cover z-10"
              />

              {/* Foreground banner image */}
              <img
                src={bannerImg}
                alt="banner"
                className="relative w-full h-full object-cover z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
