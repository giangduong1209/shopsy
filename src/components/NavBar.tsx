import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";
import Button from "./ui/Button";

const menuData = [
  {
    id: "1",
    name: "Home",
    link: "/#",
  },
  {
    id: "2",
    name: "Top Rated",
    link: "/#",
  },
  {
    id: "3",
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: "4",
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: "5",
    name: "Electronic",
    link: "/#",
  },
];

const dropdownLinks = [
  {
    id: "sub_1",
    link: "#",
    name: "Trending Products",
  },
  {
    id: "sub_2",
    link: "#",
    name: "Best Selling",
  },
  {
    id: "sub_3",
    link: "#",
    name: "Top Rated",
  },
];

const NavBar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Order button */}
            <Button onClick={() => alert("Ordering not available yet.")}>
              {/* <span className="transition-all duration-100">Order</span> */}
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Button>
            {/* Darkmode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menuData.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary transition-colors duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 transition-colors"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-sm bg-white p-2 text-black shadow-md">
              <ul>
                {dropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
