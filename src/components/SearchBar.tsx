import { Search } from "lucide-react";
import React, { useState } from "react";


type Props = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};


function SearchBar({ searchQuery, setSearchQuery }: Props) {
  
  return (
    <div className="mb-8 z-90">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          placeholder="Search endpoints, schemas, and more..."
          className="w-full border border-gray-700 pl-12 py-4 rounded-2xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
