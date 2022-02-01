import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5">
          <div>
            <div className="flex items-center">
              <img src={require('../../assets/img/near-logo-white-desc.png')} alt="" className="w-16" />
              <div className="h-20 ml-2 mr-3 bg-white rounded-full border border-gray-300"></div>
              <p className="text-white text-xl xl:text-4xl font-medium">Analytics</p>
            </div>
            <a href="#" className="mt-2 ml-2 inline-block text-gray-200 text-lg">
              info@nearanalytics
            </a>
            <br />
            <a href="#" className="mt-2 ml-2 inline-block text-gray-200 text-lg">
              1-232-3434 (Main)
            </a>
          </div>
          <div className="mt-8 ml-2 xl:ml-14">
            <p className="font-semibold text-white text-lg">About</p>
            <ul className="text-white text-lg space-y-1 mt-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About contract
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About NEAR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About NEAR ecosystem
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 ml-2 xl:ml-14">
            <p className="font-semibold text-white text-lg">Community</p>
            <ul className="text-white text-lg space-y-1 mt-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Community OS Wiki
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 ml-2 xl:ml-14">
            <p className="font-semibold text-white text-lg">Help</p>
            <ul className="text-white text-lg space-y-1 mt-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  info@nearanalytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  1-232-3434 (Main)
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <Link
              to={routes.Dashboard}
              href=""
              className="inline-block border border-gray-200 rounded-full text-white font-semibold text-lg py-4 w-full text-center hover:bg-white hover:text-gray-800"
            >
              Go to dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
