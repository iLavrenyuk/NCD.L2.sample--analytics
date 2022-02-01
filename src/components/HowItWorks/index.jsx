import React from 'react';
import { anchorRoutes } from '../../router/routes';

export const HowItWorks = () => {
  return (
    <section id={anchorRoutes.HowItWorks}>
      <div className="container mx-auto px-6 my-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-6xl font-bold">How it works.</h1>
            <p className="text-blue-900 font-semibold text-lg w-4/5 mt-8">
              This project is the first step to bringing AI to the NEAR blockchain. It contains two interacting smart
              contracts, which enable data storage & analysis in addition to providing a simple authorization mechanism.
            </p>
            <p className="text-blue-900 font-semibold text-lg w-4/5 mt-8">
              This project is the first step to bringing AI to the NEAR blockchain. It contains two interacting smart
              contracts, which enable data storage & analysis in addition to providing a simple authorization mechanism.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-24 md:mt-0">
            <img src={require('../../assets/img/Illustration.png')} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
