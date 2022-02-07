import React from 'react';

export const DatasetOption = () => {
  return (
    <div className="w-full flex items-center">
      <input
        type="text"
        className="w-2/3 border py-2 px-4 rounded-full outline-none hover:border-purple-500 focus:border-purple-500"
      />
      <p className="ml-4 whitespace-nowrap font-bold">Option 1</p>
      <a href="" className="ml-4 flex-none">
        <img src={require('../../assets/img/edit.png')} alt="" />
      </a>
      <a href="" className="flex-none">
        <img src={require('../../assets/img/close_big.png')} alt="" />
      </a>
    </div>
  );
};
