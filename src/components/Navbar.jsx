import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white py-4">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold cursor-pointer">logo</h2>
          <div className="cursor-pointer">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
