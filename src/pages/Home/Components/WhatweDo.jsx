import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatweDo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-zinc-950 py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <h1
          className="text-[#FFB902] text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          What we do
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Strategy */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-[#FFB902]/70 mb-4">
              Strategy.
            </h3>
            <ul className="text-white font-medium space-y-2">
              <li>Analytics and Research</li>
              <li>Interactive Workshops</li>
              <li>Brand Strategy</li>
              <li>Current Strategy</li>
              <li>Digital Strategy</li>
              <li className="underline">Conversion Rate Optimization</li>
            </ul>
          </div>

          {/* Design */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-semibold text-[#FFB902]/70 mb-4">
              Design.
            </h3>
            <ul className="text-white font-medium space-y-2">
              <li>Creative Direction</li>
              <li>Brand Guides</li>
              <li>Prototypes</li>
              <li className="underline">UI/UX & Web Design</li>
              <li>Visual Asset Creation</li>
              <li>Motion Design</li>
            </ul>
          </div>

          {/* Development */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-2xl font-semibold text-[#FFB902]/70 mb-4">
              Development.
            </h3>
            <ul className="text-white font-medium space-y-2">
              <li>System Architecture Design</li>
              <li>Full-Stack Development</li>
              <li className="underline">3rd Party Integration</li>
              <li>Performance Optimization</li>
              <li>WordPress Development</li>
              <li>Spify Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatweDo;
