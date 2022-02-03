import React, { useState } from 'react';
import { LogoBig } from '../LogoBig';
import { Link } from 'react-router-dom';
import { MobileMenu } from '../MobileMenu';
import { routes } from '../../router/routes';
import { SearchInput } from '../SearchInput';

export const HeaderDashboard = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="border-b border-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <LogoBig />

          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <SearchInput />
            </div>

            <ul className="hidden lg:flex items-center space-x-4 mx-8 font-semibold text-blue-900">
              <li>
                <Link to={routes.Home}>Home</Link>
              </li>
              <li>
                <Link to={routes.Home}>Help</Link>
              </li>
            </ul>

            <Link
              to={routes.AddChart}
              className="hidden lg:flex items-center justify-center text-base font-semibold w-60 btn"
            >
              Create a dataset
            </Link>
            <button onClick={setIsOpenMenu} className="ml-8 lg:hidden">
              <img src={require('../../assets/img/menu.png')} alt="" />
            </button>
            {isOpenMenu ? <MobileMenu handleClose={() => setIsOpenMenu(false)} /> : null}
          </div>
        </div>
      </div>
    </header>
  );
};
