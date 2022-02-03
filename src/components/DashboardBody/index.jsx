import React from 'react';
import { Dataset } from '../Dataset';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';
import { ProfileBlock } from '../ProfileBlock';

export const DashboardBody = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 md:mt-20 gap-x-11 xl:gap-x-20">
        <div className="col-span-1 hidden md:block ">
          <ProfileBlock />
        </div>

        <div className="col-span-1 md:col-span-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">My datasets</h1>
            <Link to={routes.AddChart}>
              <img src={require('../../assets/img/New-Button.png')} alt="" className="h-10 w-10 lg:hidden" />
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-11 lg:gap-x-4 xl:gap-x-11 gap-y-10 xl:gap-y-8">
            <Dataset />
          </div>
        </div>
      </div>
    </div>
  );
};
