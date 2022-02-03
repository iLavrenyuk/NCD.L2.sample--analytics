import React from 'react';

export const SearchInput = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="w-72 py-3 pl-6 font-semibold border rounded-3xl outline-none hover:border-pink-300 focus:border-pink-300"
        placeholder="Find dataset"
      />
      <img src={require('../../assets/img/search.png')} alt="" className="h-6 w-6 -ml-10" />
    </div>
  );
};
