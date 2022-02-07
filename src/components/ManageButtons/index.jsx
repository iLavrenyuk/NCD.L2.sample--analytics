import React from 'react';

export const ManageButtons = ({ onSubmit, submitText, onReset, resetText, resetIcon }) => {
  return (
    <div className="mt-8 space-y-6">
      <button onClick={onSubmit} className="inline-block w-full btn border">
        {submitText}
      </button>
      <button
        onClick={onReset}
        className="flex items-center justify-center w-full py-3 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white"
      >
        {resetText}
        {resetIcon}
      </button>
    </div>
  );
};
