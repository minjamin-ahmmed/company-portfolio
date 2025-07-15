import React from "react";
import brandValueImg1 from "/assets/brand-values1.jpg";
import brandValueImg2 from "/assets/brand-values2.jpg";
import brandValueImg3 from "/assets/brand-values3.jpg";
const BrandValues = () => {
  return (
    <div className="bg-[#ddcfc6] py-20">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center relative">
          <div className="bg-zinc-900 p-8 w-11/12 max-w-md mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6 text-center shadow-lg">
            <h1 className="text-white text-4xl font-bold">Brand Values</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>

            <button className="border border-white px-8 py-2 text-white rounded-lg cursor-pointer">
              LEARN MORE
            </button>
          </div>
          <div>
            <div className="mb-4">
              <img
                className="lg:w-3/4 h-[400px] lg:ml-[25%]"
                src={brandValueImg1}
                alt=""
              />
            </div>

            <div>
              <img className="" src={brandValueImg3} alt="" />
            </div>
          </div>

          <div>
            <img
              className="h-[700px] object-cover"
              src={brandValueImg2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandValues;
