import { IoSearchOutline } from "react-icons/io5";

type Props = {
  className?: string;
};

const Search = ({ className }: Props) => {
  return (
    <form action="" className={`flex-1 text-slate-900 ${className}`}>
      <div className="bg-slate-50 flex items-center space-x-1 py-2 pr-4 pl-2 rounded-xl h-full border border-slate-100">
        <IoSearchOutline className="text-xl text-slate-700" />
        <input
          placeholder="Tìm kiếm..."
          className="border-none bg-transparent outline-none w-full text-sm pl-1"
          type="search"
        />
      </div>
    </form>
  );
};

export default Search;
