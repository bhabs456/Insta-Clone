import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-4 h-10 mb-2">

      <div className="flex h-full items-center rounded-full bg-zinc-100 px-4">

        <Search className="h-5 w-5 text-zinc-400" />

        <input
          type="text"
          placeholder="Search"
          className="w-full h-full px-4 py-[3px] bg-transparent text-base font-normal text-white placeholder:text-zinc-500 focus:outline-none"
        />

      </div>

      

    </div>
  );
}