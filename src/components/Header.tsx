// type Props = {}
import { useState } from "react";
import imgLogo from "../assets/img/logo140.svg";
import Menu from "./Menu";
import User from "./User";
import Search from "./Search";

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const handleShowMenu = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  return (
    <header
      className={`${
        showMenuMobile ? "show-mobile" : ""
      } border-b border-slate-100`}
    >
      <div className="container mx-auto duration-300">
        <div className="flex justify-between h-20">
          <div className="flex items-center lg:hidden flex-1">
            <button
              onClick={handleShowMenu}
              className="btn-show-menu p-2.5 pl-0 rounded-lg text-neutral-700 flex items-center justify-center"
            >
              {showMenuMobile ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
          <div className="lg:flex-1 flex items-center">
            <img src={imgLogo} alt="" className="w-36" />
          </div>
          <nav className="hidden lg:flex items-center">
            <Menu />
          </nav>
          <div className="flex-1 flex justify-end items-center">
            <div className="mt-1 hidden lg:block w-40 mr-2">
              <Search />
            </div>
            <User />
            <button className="lg:w-12 w-10 h-10 lg:h-12 flex justify-center items-center relative text-slate-700 rounded-full hover:bg-slate-100">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute w-3.5 h-3.5 flex items-center justify-center bg-[#12a5e8] top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
                0
              </span>
            </button>
          </div>
        </div>
        {/* mobile */}
        <nav className="menu-mobile flex lg:hidden items-center justify-center flex-col max-h-0 duration-500 opacity-0 invisible">
          <Menu />
          <div className="mt-5 mb-3">
            <Search />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
