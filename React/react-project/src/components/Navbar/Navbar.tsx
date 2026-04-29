import { FaPhoneAlt } from "react-icons/fa";
import { navLinks } from "../../constant/Navlink";
import Darkmode from "./Darkmode";
import { Logo } from "../../image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import Responsive from "./Responsive";

const Navbar = () => {
  const [showMenu, setMenu] = useState(false);

  const handleMenuToggle = () => setMenu(!showMenu);

  return (
    <div>
      {/* Top bar */}
      <div className="bg-primary container">
      <div className="bg-primary lg:flex items-center justify-between py-2 px-4 hidden">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <p>+977-5678990</p>
        </div>
        <p>Free shipping on Order Above Rs. 2000</p>
      </div>
      </div>

      {/* Main navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white text-black dark:bg-black dark:text-white">
        
        {/* Logo */}
        <img src={Logo} alt="logo" className="h-16" />

        {/* Desktop menu */}
        <div className="flex items-center gap-6">
          <ul className="lg:flex hidden gap-6 items-center">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="font-semibold text-lg hover:text-primary cursor-pointer transition"
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>

          <button className="bg-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary transition">
            Shop Now
          </button>

          <Darkmode />
        </div>

        {/* Mobile menu icons */}
        <div className="flex lg:hidden items-center gap-4 px-3">
          <Darkmode />

          {showMenu ? (
            <IoMdClose
              onClick={handleMenuToggle}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <CiMenuBurger
              onClick={handleMenuToggle}
              className="cursor-pointer text-2xl"
            />
          )}
        </div>
      </div>

      {/* Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleMenuToggle}
        />
      )}

      {/* Mobile Sidebar */}
      <Responsive showMenu={showMenu} />
    </div>
  );
};

export default Navbar;