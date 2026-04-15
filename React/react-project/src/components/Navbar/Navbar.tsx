import { FaPhoneAlt } from "react-icons/fa";

import { navLinks } from "../../constant/Navlink";
import Darkmode from "./Darkmode";
import { Logo } from "../../image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import Responsive from "./Responsive";

const Navbar = () => {
  const [showMenu , setMenu] = useState(false)
  const handleMenuToggle =()=> setMenu (!showMenu)
  return (
    <div>
      {/* Top bar */}
      <div className="bg-yellow-300 flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <p>+977-5678990</p>
        </div>
        <p>Free shipping on Order Above Rs. 2000</p>
      </div>

      {/* Main navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white text-black dark:bg-black dark:text-white">
        
        {/* Logo */}
        <img src={Logo} alt="logo" className="h-16" />

        {/* Menu */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="font-semibold text-lg hover:text-orange-500 cursor-pointer transition"
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>

          <button className="bg-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
            Shop Now
          </button>

          <Darkmode />
        </div>
        <div>
          <Darkmode />
          {showMenu ? (
           <IoMdClose onClick={handleMenuToggle}/>
          ) : (
            <CiMenuBurger  onClick={handleMenuToggle}/>
          )}
        </div>
      </div>
      <Responsive  showMenu={showMenu}/>
    </div>
  );
};

export default Navbar;