import React from "react";
import contactImg from "/assets/contact-us.jpg";

const Contactus = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left section: Contact Info */}
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4 text-center">
            CONTACT US
          </h1>
          <p className="text-zinc-700 text-center mb-6">
            We are here to meet any business need and to promote your company
            online!
          </p>

          <div className="h-[3px] bg-[#DDCFC3] w-3/4 mx-auto my-6" />

          <div className="space-y-4 text-zinc-800 text-sm sm:text-base">
            <h3>
              <strong>Phone:</strong>{" "}
              <span className="text-zinc-600">1 (232) 252 55 22</span>
            </h3>
            <h3>
              <strong>Location:</strong>{" "}
              <span className="text-zinc-600">75 Street, New York, USA</span>
            </h3>
            <h3>
              <strong>Email:</strong>{" "}
              <span className="text-zinc-600">info@yourcompany.com</span>
            </h3>
          </div>

          <p className="mt-6">
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
      </div>

      {/* Right section: Image */}
      <div className="w-full h-full">
        <img
          src={contactImg}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contactus;
