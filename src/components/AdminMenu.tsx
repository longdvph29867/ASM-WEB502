import React from "react";
import imgLogo from "../assets/img/logo140.svg";
import imgLogoIcon from "../assets/img/logo_icon.png";
import { MdDashboard, MdCategory } from "react-icons/md";
import { FaBoxes, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
type Menu = {
  link: string;
  title: string;
  icon: JSX.Element;
  active: boolean;
};
const listMenu: Menu[] = [
  {
    link: "/",
    title: "Dashboard",
    icon: <MdDashboard />,
    active: false,
  },
  {
    link: "/",
    title: "Category",
    icon: <MdCategory />,
    active: false,
  },
  {
    link: "/",
    title: "Products",
    icon: <FaBoxes />,
    active: true,
  },
  {
    link: "/",
    title: "Users",
    icon: <FaUserAlt />,
    active: false,
  },
];

const AdminMenu: React.FC = () => {
  return (
    <div className="lg:w-64 lg:px-4 pl-4 lg:min-w-[256px] duration-500">
      <div className="h-full w-8 lg:w-full">
        <Link
          className="block lg:px-8 lg:py-6 my-6 text-sm text-slate-700"
          to="/admin/products"
        >
          <img src={imgLogo} className="hidden lg:block" />
          <img src={imgLogoIcon} className="lg:hidden inline-block" />
        </Link>
        <hr className="h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        <div className="mt-4">
          <ul className="flex flex-col">
            {listMenu.map(({ link, title, icon, active }, index) => {
              return (
                <li key={index} className="">
                  <a
                    className={`text-sm flex items-center lg:px-4 py-2.5 rounded-lg ${
                      active ? "lg:bg-white lg:shadow-xl" : ""
                    } `}
                    href={link}
                  >
                    <div
                      className={`lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg ${
                        active
                          ? "lg:bg-transparent lg:shadow-none bg-white shadow-lg"
                          : ""
                      } `}
                    >
                      {icon}
                    </div>
                    <span className="ml-1 opacity-100 hidden lg:block">
                      {title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
