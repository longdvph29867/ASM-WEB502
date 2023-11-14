import { FC } from "react";
import imgLogo from "../assets/img/logo140.svg";
import User from "../components/User";
import Search from "../components/Search";
import { MdDashboard, MdCategory } from "react-icons/md";
import { FaBoxes, FaUserAlt } from "react-icons/fa";
type Props = {
  Component: FC;
};
type Menu = {
  link: string;
  title: string;
  icon: JSX.Element;
};

function LayoutAdmin({ Component }: Props) {
  const listMenu: Menu[] = [
    {
      link: "/",
      title: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      link: "/",
      title: "Category",
      icon: <MdCategory />,
    },
    {
      link: "/",
      title: "Products",
      icon: <FaBoxes />,
    },
    {
      link: "/",
      title: "Users",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className="flex min-h-screen w-full bg-[#f8f9fa]">
      <div className="w-64 px-4">
        <div className="h-full">
          <a className="block px-8 py-6 m-0 text-sm text-slate-700" href="#">
            <img src={imgLogo} className="" />
          </a>
          <hr className="h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
          <div className="mt-4">
            <ul className="flex flex-col">
              {listMenu.map(({ link, title, icon }, index) => {
                return (
                  <li key={index} className="">
                    <a
                      className="py-2.7 text-sm flex items-center px-4 py-2.5 rounded-lg"
                      href={link}
                    >
                      <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                        {icon}
                      </div>
                      <span className="ml-1 opacity-100">{title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-grow px-4 flex flex-col">
        <nav className="flex items-center justify-between py-2">
          <h6 className="font-bold capitalize text-slate-800">Ciseco. admin</h6>
          <div className="flex items-center">
            <Search className="border rounded-lg" />
            <User />
          </div>
        </nav>
        <div className="flex-grow relative flex flex-col min-w-0 mb-6 bg-white shadow-sm rounded-2xl">
          {<Component />}
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
