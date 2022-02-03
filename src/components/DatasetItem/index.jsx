import React from 'react';

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
      <a href="#" className={`block h-full min-w-24 w-24 rounded-l-md ${image ? '' : backgroundColors[bgCounter]}`}>
        {image}
      </a>
      <div className="py-5 px-6 box-content">
        <a href="#" className="text-base md:text-xl lg:text-2xl font-semibold">
          {name}
        </a>
        <p className="mt-2 text-gray-300 font-semibold text-ellipsis overflow-hidden max-h-22">{text}</p>
      </div>
    </div>
  );
};
