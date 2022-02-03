import React from 'react';
import { LogoBig } from '../LogoBig';
import { SearchInput } from '../SearchInput';
import { ManageProfile } from '../ManageProfile';

export const MobileMenu = ({ handleClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white">
      <img src={require('../../assets/img/purple.png')} alt="" className="absolute z-1 bottom-16" />
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <LogoBig />
          <button onClick={handleClose}>
            <img src={require('../../assets/img/close_big.png')} alt="" />
          </button>
        </div>

        <ul className="flex justify-center items-center space-x-4 mx-8 font-semibold text-blue-900">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>

        <div className="mt-8 flex justify-center">
          <SearchInput />
        </div>
        <ManageProfile className="justify-center" />
      </div>
    </div>
  );
};
