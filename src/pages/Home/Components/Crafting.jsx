import React from "react";
import craftingImg from "/assets/crafting-digital-experience.jpg";
const Crafting = () => {
  return (
    <div
      style={{ backgroundImage: `url(${craftingImg})` }}
      className="bg-cover bg-center bg-no-repeat min-h-screen relative"
    >
      <div className="bg-white p-8 absolute translate-y-1/2 lg:left-[10%]">
        <div className="max-w-lg mx-auto space-y-4">
          <h1 className="text-4xl font-bold text-zinc-900 w-3/4">
            Crafting Digital Experience
          </h1>

          <p>Join the elite ranks of sustainer value creators</p>

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

          <button className="bg-zinc-900 text-white px-8 py-2 rounded-md">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crafting;
