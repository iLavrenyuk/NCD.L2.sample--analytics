import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';

export const BlockUrge = () => {
  return (
    <section className="relative pb-24 lg:mb-0">
      <img src={require('../../assets/img/bottom.png')} alt="" className="absolute bottom-0 w-full" />
      <div className="container mt-24 xl:h-screen mx-auto px-6 pt-24">
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-center">Try NEAR Analytics for free.</h1>
        <p className="mt-9 text-blue-900 text-center font-semibold tracking-wide">
          Manage your datasets, explore analytics and do analysis in your <br className="hidden md:block" /> data by
          NEAR Blockchain
        </p>
        <div className="flex justify-center ">
          <Link to={routes.Dashboard} href="#" className="mt-8 btn w-52">
            Go to dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};
