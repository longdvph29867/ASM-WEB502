import { FC } from "react";
import User from "../components/User";
import Search from "../components/Search";
import AdminMenu from "../components/AdminMenu";
import { localUserService } from "../services/localService";
type Props = {
  Component: FC;
};

function LayoutAdmin({ Component }: Props) {
  if (localUserService.get()?.role !== "admin") {
    window.location.href = "/";
  }
  return (
    <div className="flex min-h-screen w-full bg-[#f8f9fa]">
      <AdminMenu />

      <div className="flex-grow px-4 flex flex-col">
        <nav className="flex items-center justify-between py-2">
          <h6 className="font-bold capitalize text-slate-800">Ciseco. admin</h6>
          <div className="flex items-center sm:flex-row flex-col-reverse">
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
