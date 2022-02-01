import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { hashRoutes, routes } from '../../router/routes';
export const BlockTitle = () => {
  return (
    <section className="relative">
      <img src={require('../../assets/img/purple.png')} alt="" className="absolute z-1 w-full" />

      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-center mt-12">
          NEAR Analytics <br /> project.
        </h1>
        <p className="text-gray-900 text-center text-lg mt-12 font-semibold">
          This project is the first step to bringing AI to the NEAR blockchain. It contains two interacting smart{' '}
          <br className="hidden lg:block" /> contracts, which enable data storage & analysis in addition to providing a
          simple authorization <br className="hidden lg:block" /> mechanism.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-x-0 space-y-4 md:space-y-0 md:space-x-10">
          <Link to={routes.Dashboard} className="btn w-64 box-border font-semibold">
            Go to dashboard
          </Link>
          <HashLink
            smooth
            to={hashRoutes.About}
            className="inline-block w-64 border-2 text-center font-semibold py-3 rounded-full border-gray-900 hover:bg-black hover:text-white"
          >
            About contract
          </HashLink>
        </div>
      </div>

      <img src={require('../../assets/img/bottom.png')} alt="" className="w-full mt-16" />
    </section>
  );
};
