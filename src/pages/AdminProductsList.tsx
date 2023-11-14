// type Props = {}

const AdminProductsList = () => {
  return (
    <div className="">
      <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
        <h6>Table</h6>
      </div>
      <div className="h-full overflow-x-auto">
        <table className="w-full border-gray-200 text-slate-500">
          <thead className="">
            <tr>
              <th className=" pr-6 pl-4 py-3  text-left font-bold uppercase text-slate-800">
                123
              </th>
              <th className=" pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
                Lorem, ipsum.
              </th>
              <th className=" pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
                123
              </th>
              <th className=" pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
                123
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">
                <div className="flex px-2 py-1">
                  <div>
                    <img src="../12" className="mr-4 h-9 w-9 rounded-xl" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h6 className="text-sm">Lorem, ipsum dolor.</h6>
                    <p className="text-xs text-slate-400"> ipsum dolor</p>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <p className="text-xs font-semibold">Manager</p>
                <p className="text-xs text-slate-400">Manager</p>
              </td>
              <td className="p-2">
                <span className="text-xs font-semibold text-slate-400">
                  23/04/18
                </span>
              </td>
              <td className="p-2">
                <a href="#" className="text-xs font-semibold text-slate-400">
                  {" "}
                  Edit{" "}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductsList;
