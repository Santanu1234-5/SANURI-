import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  let baseClass = 'px-6 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 ';
  
  if (variant === 'primary') {
    baseClass += 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] ';
  } else if (variant === 'secondary') {
    baseClass += 'bg-[#151821] hover:bg-[#1E2330] text-white border border-slate-800 ';
  } else if (variant === 'outline') {
    baseClass += 'bg-transparent hover:bg-slate-800 text-white border border-slate-700 ';
  } else if (variant === 'ghost') {
    baseClass += 'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white ';
  }

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
