import React, { useState } from "react";
import Button from "./Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import BrandLogo from "../../assets/images/picturePerfect.svg";
import Image from "next/image";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Talent", link: "/talent" },
    { name: "Contact Us", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="border-b-[1px] border-gray-100 w-full fixed top-0 left-0 font-sofia">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div>
          <Image src={BrandLogo} alt="Brandlogo" width={150} height={150} />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
