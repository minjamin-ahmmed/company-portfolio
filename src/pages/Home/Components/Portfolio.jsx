import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import webDesign from "/assets/website-design.png";
import mobileApplication from "/assets/mobile-application.png";
import corporateDesign from "/assets/corporate-design.png";
import mobileApplication2 from "/assets/mobile-application2.jpg";
import responsiveDesign from "/assets/responsive-design.jpg";
import digitalProduct from "/assets/digital-product.jpg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const overviews = [
    {
      id: 1,
      image: webDesign,
      title: "Website Design",
    },
    {
      id: 2,
      image: mobileApplication,
      title: "Mobile Application",
    },
    {
      id: 3,
      image: corporateDesign,
      title: "Corporate Design",
    },
    {
      id: 4,
      image: mobileApplication2,
      title: "Mobile Application",
    },
    {
      id: 5,
      image: responsiveDesign,
      title: "Responsive Design",
    },
    {
      id: 6,
      image: digitalProduct,
      title: "Digital Product",
    },
  ];

  return (
    <div className="bg-[#272C32] py-20">
      <div className="w-11/12 mx-auto">
        <h1
          className="text-4xl text-center font-bold text-white mb-6"
          data-aos="fade-up"
        >
          Portfolio
        </h1>

        <p
          className="text-center text-white mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {overviews.map((overview, index) => (
            <div
              key={overview.id}
              data-aos="flip-left"
              data-aos-delay={300 + index * 100}
              className="rounded overflow-hidden shadow-md"
            >
              <img
                className="w-full h-[300px] object-cover"
                src={overview.image}
                alt={overview.title}
              />
              <h3 className="text-zinc-600 text-xl font-medium py-4 bg-white text-center">
                {overview.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
