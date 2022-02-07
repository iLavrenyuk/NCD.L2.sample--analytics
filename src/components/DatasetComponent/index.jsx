import React from 'react';
import { DatasetOption } from '../DatasetOption';

export const DatasetComponent = ({ type }) => {
  const types = {
    bars: {
      title: '📊 Vertical Bars',
      img: require('../../assets/img/Desc ↓.png'),
    },
    pie: {
      title: 'Pie chart',
      img: require('../../assets/img/Pie Classic.png'),
    },
  };

  const chartType = types[type];

  return (
    <div className="flex flex-col lg:flex-row mb-24">
      <div className="w-full lg:w-1/2">
        <p className="text-gray-800 text-lg">{chartType?.title}</p>
        <p className="text-gray-400">Dataset</p>
        <img src={chartType?.img} alt="" className="" />
      </div>

      <div className="w-full lg:w-1/2 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-y-3 gap-x-0 xl:gap-x-5 2xl:space-y-0 mt-8 lg:mt-0">
          <DatasetOption />
          <DatasetOption />
          <DatasetOption />
          <DatasetOption />
          <DatasetOption />
          <DatasetOption />
        </div>

        <div className="mt- ml-2">
          <div className="flex items-center">
            <p className="bg-gradient-to-r from-purple-500 to-purple-800 px-4 text-white font-semibold rounded-full">
              12
            </p>
            <p className="font-semibold text-gradient ml-4">Results</p>
          </div>
          <div className="mt-2">
            <div className="flex flex-row">
              <div className="">
                <h3 className="text-lg text-gray-800">Heading</h3>
                <p className="text-gray-400">Hac nulla egestas tristique laoreet.</p>
              </div>
              <a href="#" className="flex items-center justify-center btn h-12 w-40 ml-auto mt-2 font-semibold">
                Calculate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
