import { Link, NavLink } from "next/link";
import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { svgIcons } from "../public/assests/svg";

const Header = () => {
  const addDataPoints = () => {
    //function for the data points
  };
  let open = true;

  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-20">
      <div>
        <div className="flex justify-between h-16">
          <div className="flex items-center ml-8">
            <div className="flex items-center">
              {/* <Link to="#"> */}
              <img
                src={"/assests/images/mainLogo.svg"}
                alt={"logo"}
                className="w-[150px]"
              />
              {/* </Link>  */}
            </div>
            <div className="ml-8 hidden lg:mr-4 lg:flex lg:items-center"></div>
          </div>
          <div className="flex items-center lg:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center mr-8 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          <div className="hidden lg:mr-4 lg:flex lg:items-center">
            <div className="divide-x-2 flex items-center mr-6">
              <span className="text-primary-500 text-sm font-medium text-secondary-700 pr-6 cursor-pointer">
                Order History
              </span>
              <span className="text-primary-500 text-sm font-medium text-secondary-700 pr-6 cursor-pointer ml-4">
                Low Stock Report
              </span>
            </div>
            <button
              type="button"
              className="flex-shrink-0 bg-white p-1 mr-4 text-secondary-400 rounded-full hover:text-secondary-500"
            >
              {svgIcons.cart}
            </button>
            <button
              type="button"
              className="flex-shrink-0 bg-white p-1 text-secondary-400 rounded-full hover:text-secondary-500"
            >
              {svgIcons.ClipboardList}
            </button>
            <Menu as="div" className="ml-6 relative flex-shrink-0">
              <div>
                <Menu.Button className="bg-white cursor-default rounded-full flex text-sm">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/assests/images/Marketplace-single-logo.png"
                    alt=""
                  />
                  {/* </Tooltip> */}
                </Menu.Button>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Header;
