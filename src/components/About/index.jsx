import React from 'react';
import { Link } from 'react-router-dom';
import { anchorRoutes, routes } from '../../router/routes';

export const About = () => {
  return (
    <section id={anchorRoutes.About}>
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 rounded-3xl min-h-570">
          <div className="w-full h-full wave px-6 py-8">
            <div className="flex flex-col lg:flex-row">
              <div className="relative w-2/5 hidden lg:block">
                <img
                  src={require('../../assets/img/Phone.png')}
                  alt=""
                  className="absolute top-20 md:-left-24 lg:left-0 lg:-top-20"
                />
              </div>
              <div className="w-full lg:w-3/5 pt-10">
                <h2 className="text-white text-2xl md:text-4xl lg:text-7xl font-bold">About contract.</h2>
                <p className="text-white text-sm lg:text-lg mt-6">
                  In short: users can create 2D datasets (for a small fee) and incrementally fill them with their data.
                  These datasets then provide various data analysis techniques to the general public. Everything is
                  stored on the blockchain, which makes data manipulation really difficult.
                </p>
                <Link
                  to={routes.Dashboard}
                  className="inline-block mt-8 w-64 font-semibold bg-gradient-to-r from-purple-500 to-purple-800 py-3 text-center text-white rounded-full transform hover:scale-105"
                >
                  Try contract
                </Link>
              </div>
              <div className=" lg:hidden py-8">
                <img src={require('../../assets/img/Phone.png')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
