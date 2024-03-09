import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex h-10 items-center rounded bg-AmazonClone-yellow">
      <select
        name=""
        id=""
        className="p-2 w-[70px] h-10 bg-gray-300 text-gray-500 hover:text-black rounded-tl rounded-bl border text-xs xl:text-sm"
      >
        <option value="">All</option>
        <option value="">Deals</option>
        <option value="">Electronics</option>
        <option value="">Beauty</option>
        <option value="">Health & Personal Care</option>
      </select>
      <input
        className="p-2 flex grow items-center md:w-[500px] h-[100%] text-black outline-none"
        type="text"
        placeholder="Search Amazon.in"
      />
      <button className="w-[45px] flex items-center justify-center">
        <IoSearch className="stroke-slate-900" size={24} />
      </button>
    </div>
  );
};

export default Search;
