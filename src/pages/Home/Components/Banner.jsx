import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImg from "/assets/banner-image.jpg";
import bannerImgMask from "/assets/banner-background-mask.png";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-back",
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#ddcfc6] py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Block */}
        <div
          className="bg-white px-10 py-16 max-w-7xl relative mt-88 lg:mt-96"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          <h1
            className="text-4xl font-bold text-zinc-900 mb-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            We Create Websites
          </h1>

          <p
            className="lg:w-1/2 text-zinc-900 mb-8"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>

          <p className="mb-8" data-aos="fade-up" data-aos-delay="900">
            Image from{" "}
            <a
              className="text-zinc-900 underline"
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
          </p>

          <button
            className="bg-zinc-900 text-white px-8 py-3 rounded-md font-semibold"
            data-aos="zoom-in"
            data-aos-delay="1100"
          >
            VIEW PORTFOLIO
          </button>

          {/* Right Image Layer */}
          <div
            className="absolute -top-88 lg:-top-96 lg:-right-32"
            data-aos="zoom-in-up"
            data-aos-delay="1000"
          >
            <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
              <div
                className="absolute -top-12 left-12 w-full h-[400px] lg:h-[650px] bg-[#F0AA00] z-0"
                data-aos="zoom-in"
                data-aos-delay="1200"
              />
              <img
                src={bannerImgMask}
                alt="mask"
                className="absolute top-12 -left-10 lg:-left-12 w-full h-full object-cover z-10"
                data-aos="fade-left"
                data-aos-delay="1300"
              />
              <img
                src={bannerImg}
                alt="banner"
                className="relative w-full h-full object-cover z-20"
                data-aos="zoom-in"
                data-aos-delay="1400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
