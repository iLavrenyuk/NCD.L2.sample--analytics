import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';

const backgroundColors = [
  'bg-red-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-pink-500',
  'bg-amber-500',
];

export const DatasetItem = ({ name, text, image, id }) => {
  const bgCounter = (id ?? 0) % backgroundColors.length;

  return (
    <div className="flex w-full h-32 md:h-32 lg:h-40 bg-white sh-card rounded-md">
      <Link
        to={routes.Dataset}
        href="#"
        className={`block h-full min-w-24 w-24 rounded-l-md ${image ? '' : backgroundColors[bgCounter]}`}
      >
        {image}
      </Link>
      <div className="py-5 px-6 box-content truncate">
        <Link to={routes.Dataset} href="#" className="text-base md:text-xl lg:text-2xl font-semibold truncate">
          {name}
        </Link>
        <p className="mt-2 text-gray-300 font-semibold whitespace-normal max-h-22">{text}</p>
      </div>
    </div>
  );
};
