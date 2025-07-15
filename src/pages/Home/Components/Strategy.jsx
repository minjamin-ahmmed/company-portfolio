import React from "react";
import strategyImg from "/assets/mockup.jpg";

const Strategy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
      {/* Image section */}
      <div className="lg:col-span-2 h-full">
        <img src={strategyImg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content section */}
      <div className="bg-[#DDCFC3] flex items-center justify-center h-full">
        <div className="max-w-lg w-full px-6 py-12">
          {/* Card 1 */}
          <div className="p-6 bg-white mb-6">
            <h1 className="text-xl font-bold text-zinc-900 mb-4">
              Branding Strategy
            </h1>
            <p className="text-zinc-900/70 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
              nesciunt nam. Iste, nam placeat ratione eum et excepturi
            </p>
            <p>
              Image from{" "}
              <a
                className="text-zinc-900 underline"
                href="https://www.freepik.com/"
                target="_blank"
              >
                Freepik
              </a>
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white mb-6">
            <h1 className="text-xl font-bold text-zinc-900 mb-4">
              Designing logos
            </h1>
            <p className="text-zinc-900/70 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
              nesciunt nam. Iste, nam placeat ratione eum et excepturi
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white mb-6">
            <h1 className="text-xl font-bold text-zinc-900 mb-4">
              Brand Identity
            </h1>
            <p className="text-zinc-900/70 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
              nesciunt nam. Iste, nam placeat ratione eum et excepturi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
