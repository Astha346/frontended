import { navLinks } from '../../constant/Navlink';
import { Logo } from '../../image';

type ResponsiveMenuProps = {
  showMenu: boolean;
};

export const Responsive = ({ showMenu }: ResponsiveMenuProps) => {
  return (
    <div
      className={`
        fixed top-0 left-0
        h-screen w-[75%]
        px-8 py-8
        flex flex-col
        bg-white dark:bg-gray-900 dark:text-white
        z-50
        transform transition-transform duration-300 ease-in-out
        ${showMenu ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Logo */}
      <div className="mt-10">
        <img src={Logo} alt="logo" className="w-20" />
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-5 mt-8">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className="text-lg font-semibold hover:bg-primary duration-300 border-b border-gray-200 dark:border-gray-800 pb-4"
          >
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-auto">
        <button className="bg-primary px-5 py-2 rounded-lg capitalize font-semibold">
          Join now
        </button>
      </div>
    </div>
  );
};

export default Responsive;