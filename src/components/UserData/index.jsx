import React from 'react';
import { ReactComponent as LogoutSvg } from '../../assets/svg/logout.svg';

export const UserData = ({ accountId, isHeader, handleSignOut }) => {
  return (
    <div className="flex items-center">
      <div
        className={`flex items-center justify-center ${
          isHeader ? 'w-16 h-16' : 'min-w-24 h-24'
        } bg-gray-200 rounded-full`}
      >
        <img
          className="w-1/2"
          src={require('../../assets/img/photo-camera-interface-symbol-for-button 1.png')}
          alt=""
        />
      </div>
      <div className="ml-6">
        <p className="text-xl font-bold">Alex Brown</p>
        <p className="text-gray-300 ">{accountId}</p>
        {isHeader ? (
          <button onClick={handleSignOut} className="flex items-center font-bold text-sm text-orange-300">
            <span className="mr-1">
              <LogoutSvg />
            </span>
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};
