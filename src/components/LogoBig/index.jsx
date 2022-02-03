import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';

export const LogoBig = () => {
  return (
    <div>
      <Link to={routes.Home} className="flex items-center text-2xl xl:text-4xl font-semibold">
        <img
          src={require('../../assets/img/near-logo-black.png')}
          alt=""
          className="border-r-2 border-gray-500 mr-4 my-4 pr-3 w-16"
        />
        Analytics
      </Link>
    </div>
  );
};
