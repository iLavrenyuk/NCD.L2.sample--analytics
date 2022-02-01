import React from 'react';
import { useStore } from '../../store';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { signIn, signOut } from '../../services/near';
import { hashRoutes, routes } from '../../router/routes';

export const Header = () => {
  const { accountId, setAccountId } = useStore();

  const handleSignIn = () => {
    signIn(window.location.origin + routes.Home);
  };

  const handleSignOut = () => {
    signOut();
    setAccountId(null);
  };

  return (
    <header className="border-b border-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
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

          <div className="hidden lg:block">
            <ul className="flex space-x-6 text-gray-900 font-semibold xl:text-lg">
              <li>
                <HashLink to={hashRoutes.About}>About contract</HashLink>
              </li>
              <li>
                <HashLink to={hashRoutes.HowItWorks}>How it works</HashLink>
              </li>
              <li>
                <HashLink to={hashRoutes.Opportunities}>Contract opportunities</HashLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            {accountId ? (
              <button onClick={handleSignOut}>handleSignOut</button>
            ) : (
              <button
                onClick={handleSignIn}
                className="hidden md:flex items-center justify-center text-base font-semibold w-60 btn"
              >
                Log in with NEAR
                <img src={require('../../assets/img/near-logo-white.png')} alt="" className="ml-3" />
              </button>
            )}
            <a href="#" className="ml-8 lg:hidden">
              <img src={require('../../assets/img/menu.png')} alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
