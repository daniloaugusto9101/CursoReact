import React from 'react';

const Input = ({ label, type, name }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-base leading-none pb-2">
        {label}
      </label>
      <input
        className="border border-zinc-200 block w-full text-base p-3 rounded-md bg-zinc-200 transition focus:outline-none focus:border-yellow-500 focus:bg-white hover:border-yellow-500"
        id={name}
        name={name}
        type={type}
      />
      <p className="text-red-600 text-sm mt-1">Error</p>
    </div>
  );
};

export default Input;
