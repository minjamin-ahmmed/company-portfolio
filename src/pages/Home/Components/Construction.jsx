import React from "react";
import constructionImg from "/assets/construction.jpg";

const Construction = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      
      <div className="min-h-screen flex items-center justify-center">
        <img src={constructionImg} />
      </div>

    
      <div className="bg-[#FFB902] py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-lg px-6">
          <h1 className="text-4xl font-bold text-white mb-6">
            Construction and renovation projects
          </h1>
          <p className="text-white/70 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            magni eos ad beatae sed doloremque incidunt quas, accusantium
            aliquid dignissimos odit minus blanditiis necessitatibus quibusdam
            pariatur, aut, at dicta deserunt magnam dolorum fugit ea? Ex a iusto
            veniam amet at rerum itaque magni nobis alias tenetur? Voluptatum
            numquam eligendi accusantium!
          </p>

          <p className="text-white/70 mb-6">
            Image from{" "}
            <a
              className="text-white underline"
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
          </p>

          <button className="border border-white px-8 py-2 text-white rounded-lg cursor-pointer">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Construction;
