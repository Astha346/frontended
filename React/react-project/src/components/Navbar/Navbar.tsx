import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";
import { NavLinks } from "../../constant/NavLink";

const Navbar = () => {
  return (
    <div>
    
      <div className="bg-yellow-300 flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-4">
          <FaPhoneAlt />
          <p>+9777-5678990</p>
        </div>
        <p>Free shipping on Order Above Rs. 2000</p>
      </div>

      <div className="flex items-center justify-between bg-black px-6 py-4 text-white">
        
        <img src={Logo} alt="logo" className="h-20" />
        
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {NavLinks.map((item) => (
              <li
                key={item.id}
                className="font-semibold text-lg hover:text-orange-500 cursor-pointer duration-500"
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>

          <button className="bg-orange-500 px-4 py-2 rounded-lg font-semibold  hover:bg-orange-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;