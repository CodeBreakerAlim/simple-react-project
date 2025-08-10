import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activelink, SetActivelink] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    SetActivelink(path);
  };

  return (
    <nav className="p-x-5 relative bg-green-500 text-white py-4 md:py-8">
      <div className="container mx-auto flex justify-between items-center ">
        <h3 className="font-bold caret-blue-500">ABDUL ALIM</h3>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggle} className="hover:text-orange-400">
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        {/* desktop menu */}
        <ul className=" md:flex hidden space-x-4 md:space-x-6 ">
          <Link
            to={"home"}
            onClick={() => {
              handleLinkClick("home");
            }}
            className={`${
              activelink === "home"
                ? "text-orange-500"
                : "hover:text-orange-300"
            }`}
          >
            Home
          </Link>
          <Link
            to={"product"}
            onClick={() => {
              handleLinkClick("product");
            }}
            className={`${
              activelink === "product"
                ? "text-orange-500"
                : "hover:text-orange-300"
            }`}
          >
            Product
          </Link>
          <Link
            to={"about"}
            onClick={() => {
              handleLinkClick("about");
            }}
            className={`${
              activelink === "about"
                ? "text-orange-500"
                : "hover:text-orange-300"
            }`}
          >
            About
          </Link>
          <Link
            to={"setting"}
            onClick={() => {
              handleLinkClick("setting");
            }}
            className={`${
              activelink === "setting"
                ? "text-orange-500"
                : "hover:text-orange-300"
            }`}
          >
            Setting
          </Link>
          <Link
            to={"menu"}
            onClick={() => {
              handleLinkClick("menu");
            }}
            className={`${
              activelink === "menu"
                ? "text-orange-500"
                : "hover:text-orange-300"
            }`}
          >
            Menu
          </Link>
        </ul>

        {/* login button */}
        <Link
          to={"login"}
          className="hidden md:block py-1 px-2 rounded bg-white text-black hover:bg-orange-400 hover:text-white"
        >
          Login
        </Link>

        {/* mobile app menu */}
        <div
          className={`left-0 md:hidden w-full absolute top-full bg-green-400 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-3 py-4">
            <Link
              to={"home"}
              onClick={() => {
                handleLinkClick("home");
              }}
              className={`${
                activelink === "home"
                  ? "text-orange-500"
                  : "hover:text-orange-300"
              }`}
            >
              Home
            </Link>
            <Link
              to={"product"}
              onClick={() => {
                handleLinkClick("product");
              }}
              className={`${
                activelink === "product"
                  ? "text-orange-500"
                  : "hover:text-orange-300"
              }`}
            >
              Product
            </Link>
            <Link
              to={"about"}
              onClick={() => {
                handleLinkClick("about");
              }}
              className={`${
                activelink === "about"
                  ? "text-orange-500"
                  : "hover:text-orange-300"
              }`}
            >
              About
            </Link>
            <Link
              to={"setting"}
              onClick={() => {
                handleLinkClick("setting");
              }}
              className={`${
                activelink === "setting"
                  ? "text-orange-500"
                  : "hover:text-orange-300"
              }`}
            >
              Setting
            </Link>
            <Link
              to={"menu"}
              onClick={() => {
                handleLinkClick("menu");
              }}
              className={`${
                activelink === "menu"
                  ? "text-orange-500"
                  : "hover:text-orange-300"
              }`}
            >
              Menu
            </Link>
            {/* mobile login */}
            <Link
              to={"login"}
              className="py-1 px-2 rounded bg-white text-black hover:bg-orange-400 hover:text-white"
            >
              Login
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
