import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-100',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'hover:bg-slate-100 hover:text-slate-900',
    link: 'underline-offset-4 hover:underline text-blue-600',
  };

  const sizes = {
    sm: 'h-9 px-3',
    md: 'h-10 py-2 px-4',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
  };

  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = props.size ? sizes[props.size] : sizes.md;

  return (
    <button className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
