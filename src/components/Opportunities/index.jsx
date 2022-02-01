import React from 'react';
import { anchorRoutes } from '../../router/routes';

export const Opportunities = () => {
  return (
    <section id={anchorRoutes.Opportunities} className="wave-purple">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-6xl font-bold">Contract opportunities.</h2>

        <div className="relative flex flex-col md:flex-row justify-center items-center mt-12 space-y-12 md:space-y-0 md:mt-24">
          <div className="flex flex-col items-center w-96 shadow-2xl rounded-2xl bg-white pb-10 md:-mr-10 px-6">
            <img src={require('../../assets/img/Icon.png')} alt="icon" className="-mt-6 w-24 h-24 mx-auto" />
            <h4 className="text-sm lg:text-xl text-gray-700 font-bold">Manage multiple datasets.</h4>
            <a
              href="#"
              className="flex items-center text-gradient hover:text-purple-500 text-sm lg:text-xl font-bold mt-2"
            >
              Go to dashboard
              <img src={require('../../assets/img/right-arrow.png')} alt="" className="ml-2" />
            </a>
          </div>

          <img src={require('../../assets/img/horizontal.png')} alt="" className="z-1 hidden md:block" />

          <div className="flex flex-col items-center w-96 shadow-2xl rounded-2xl bg-white pb-10 md:-ml-10 px-6">
            <img src={require('../../assets/img/Icon.png')} alt="icon" className="-mt-6 w-24 h-24 mx-auto" />
            <h4 className="text-sm lg:text-xl text-gray-700 font-bold">Manage write-permissions.</h4>
            <a
              href="#"
              className="flex items-center text-gradient hover:text-purple-500 text-sm lg:text-xl font-bold mt-2"
            >
              Go to dashboard
              <img src={require('../../assets/img/right-arrow.png')} alt="" className="ml-2" />
            </a>
          </div>

          <img
            src={require('../../assets/img/Vertical.png')}
            alt=""
            className="z-1 absolute top-32 hidden md:block md:left-32 xl:left-96"
          />
          <img
            src={require('../../assets/img/Vertical.png')}
            alt=""
            className="z-1 absolute top-32 hidden md:block md:right-32 xl:right-96"
          />
        </div>

        <div className="relative flex flex-col md:flex-row justify-center items-center mt-12 space-y-12 md:space-y-0 md:mt-24">
          <div className="flex flex-col items-center w-96 shadow-2xl rounded-2xl bg-white pb-10 md:-mr-10 px-6">
            <img src={require('../../assets/img/Icon.png')} alt="icon" className="-mt-6 w-24 h-24 mx-auto" />
            <h4 className="text-sm lg:text-xl text-gray-700 font-bold">
              Calculate basic descriptive statistics for the datasets
            </h4>
            <a
              href="#"
              className="flex items-center text-gradient hover:text-purple-500 text-sm lg:text-xl font-bold mt-2"
            >
              Go to dashboard
              <img src={require('../../assets/img/right-arrow.png')} alt="" className="ml-2" />
            </a>
          </div>

          <img src={require('../../assets/img/horizontal.png')} alt="" className="z-1 hidden md:block" />

          <div className="flex flex-col items-center w-96 shadow-2xl rounded-2xl bg-white pb-10 md:-ml-10 px-6">
            <img src={require('../../assets/img/Icon.png')} alt="icon" className="-mt-6 w-24 h-24 mx-auto" />
            <h4 className="text-sm lg:text-xl text-gray-700 font-bold">
              Give a prediction to unknown values (by fitting a linear model).
            </h4>
            <a
              href="#"
              className="flex items-center text-gradient hover:text-purple-500 text-sm lg:text-xl font-bold mt-2"
            >
              Go to dashboard
              <img src={require('../../assets/img/right-arrow.png')} alt="" className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
