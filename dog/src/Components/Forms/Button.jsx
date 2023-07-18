import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-base rounded-md bg-yellow-500 text-amber-900 py-3 px-5 font-semibold box-border border-2 hover:border-yellow-950 transition-all min-w-[8rem] disabled:opacity-50 disabled:cursor-wait "
    >
      {children}
    </button>
  );
};

export default Button;
