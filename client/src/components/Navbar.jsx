import { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    urlName: "/",
  },
  {
    id: "crops",
    title: "Crops",
    urlName: "/crops",
  },
  {
    id: "product",
    title: "Product",
    urlName: "/",
  },
  {
    id: "clients",
    title: "Clients",
    urlName: "/",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="bg-navbar w-full overflow-hidden fixed z-[1]">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            {/* Logo */}
            <h1 className="text-3xl text-white font-bold">OrganicDirect</h1>

            {/* Desktop Navigation */}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              <li
                className={`font-poppins font-bold cursor-pointer text-[16px] ${
                  active === "Home" ? "text-white" : "text-dimWhite"
                } mr-10`}
                onClick={() => {
                  setShowDropDown(false);
                  setActive("Home");
                }}
              >
                <Link to={`/`}>Home</Link>
              </li>

              <li className="relative">
                <div
                  className={`font-poppins font-bold cursor-pointer text-[16px] 
                ${active === "seasons" ? "text-white" : "text-dimWhite"}
                mr-10`}
                >
                  <div
                    onClick={() => {
                      setActive("seasons");
                      setShowDropDown(!showDropDown);
                    }}
                  >
                    Seasons
                  </div>
                </div>

                <li
                  className={`${
                    showDropDown ? "" : "hidden"
                  } bg-navbar end-0 z-10 mt-2 w-48 rounded-md border border-gray-100 shadow-lg fixed right-auto text-center`}
                  role="menu"
                >
                  <Link
                    to="/crops/Summer"
                    className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Summer
                  </Link>

                  <Link
                    to="/crops/Autumn"
                    className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Autumn
                  </Link>

                  <Link
                    to="/crops/Spring"
                    className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Spring
                  </Link>

                  <Link
                    to="/crops/Winter"
                    className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Winter
                  </Link>

                  <Link
                    to="/crops/PreWinter"
                    className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    PreWinter
                  </Link>

                  <Link
                    to="/crops/Monsoon"
                    className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Monsoon
                  </Link>
                </li>
              </li>

              <li
                className={`font-poppins font-bold cursor-pointer text-[16px] ${
                  active === "Contact" ? "text-white" : "text-dimWhite"
                } mr-10`}
                onClick={() => {
                  setShowDropDown(false);
                  setActive("Contact");
                }}
              >
                <Link to={`/stocks`}>Inventory</Link>
              </li>

              <li
                className={`font-poppins font-bold cursor-pointer text-[16px] ${
                  active === "About" ? "text-white" : "text-dimWhite"
                } mr-10`}
                onClick={() => {
                  setShowDropDown(false);
                  setActive("About");
                }}
              >
                <Link to={`/aboutus`}>About Us</Link>
              </li>
            </ul>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
              {toggle ? (
                <AiOutlineClose
                  className="w-[28px] h-[28px] text-white object-contain "
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <AiOutlineAlignRight
                  className="w-[28px] h-[28px] text-white object-contain "
                  onClick={() => setToggle(!toggle)}
                />
              )}

              {/* Sidebar */}
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } fixed p-6 bg-navbar  top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  <li
                    className={`font-poppins font-medium  cursor-pointer text-[16px] ${
                      active === "Home" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setShowDropDown(false);
                      setActive("Home");
                    }}
                  >
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <div
                      className={`font-poppins font-bold cursor-pointer text-[16px] 
                ${active === "seasons" ? "text-white" : "text-dimWhite"}
                mb-4`}
                    >
                      <div
                        onClick={() => {
                          setActive("seasons");
                          setShowDropDown(!showDropDown);
                        }}
                      >
                        Seasons
                      </div>
                    </div>

                    <li
                      className={`${
                        showDropDown ? "" : "hidden"
                      } bg-navbar end-0 z-10 mt-2  rounded-md  shadow-lg  text-center`}
                      role="menu"
                    >
                      <Link
                        to="/crops/Summer"
                        className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                        onClick={() => {
                          setShowDropDown(false);
                        }}
                      >
                        Summer
                      </Link>

                      <Link
                        to="/crops/Autumn"
                        className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                        onClick={() => {
                          setShowDropDown(false);
                        }}
                      >
                        Autumn
                      </Link>

                      <Link
                        to="/crops/Winter"
                        className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                        onClick={() => {
                          setShowDropDown(false);
                        }}
                      >
                        Winter
                      </Link>

                      <Link
                        to="/crops/PreWinter"
                        className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                        onClick={() => {
                          setShowDropDown(false);
                        }}
                      >
                        PreWinter
                      </Link>

                      <Link
                        to="/crops/Spring"
                        className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                        onClick={() => {
                          setShowDropDown(false);
                        }}
                      >
                        Spring
                      </Link>

                      <Link
                        to="/crops/Monsoon"
                        className="block  px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                        onClick={() => {
                          setShowDropDown(false);
                        }}
                      >
                        Monsoon
                      </Link>
                    </li>
                  </li>

                  <li
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === "Contact" ? "text-white" : "text-dimWhite"
                    } mb-4`}
                    onClick={() => {
                      setShowDropDown(false);
                      setActive("Contact");
                    }}
                  >
                    <Link to={`/stocks`}>Inventory</Link>
                  </li>
                  <li
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === "About" ? "text-white" : "text-dimWhite"
                    } `}
                    onClick={() => {
                      setShowDropDown(false);
                      setActive("About");
                    }}
                  >
                    <Link to={`/aboutus`}>About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
