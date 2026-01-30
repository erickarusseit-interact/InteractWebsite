'use client';

import Link from 'next/link';

interface ButtonCTAProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
}

const buttonClasses = `
 
  flex flex-col justify-center items-center
  px-6 py-2 gap-2.5
  h-fit min-w-[148px] min-h-9
  bg-[#7C21F9]
  border border-white/10
  rounded-md
  shadow-[7px_6px_14px_rgba(90,90,90,0.2),inset_3px_3px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_3px_rgba(0,0,0,0.13)]
  hover:bg-[#8B2BFF] 
  hover:shadow-[3px_3px_8px_rgba(90,90,90,0.3),inset_2px_2px_1px_rgba(255,255,255,0.2),inset_-0.5px_-0.5px_1px_2px_rgba(0,0,0,0.2)]
  hover:translate-y-[2px]
  active:shadow-[1px_1px_4px_rgba(90,90,90,0.4),inset_1px_1px_1px_rgba(255,255,255,0.1),inset_-0.5px_-0.5px_1px_1px_rgba(0,0,0,0.3)]
  active:translate-y-[4px]
  active:bg-[#6B1AE0]
  transition-all duration-150 ease-out
  group
  my-4
  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
`;

const textClasses = `
  whitespace-nowrap
  font-outfit font-medium text-base leading-[125%] tracking-[-0.03em]
  text-white
  
  transition-all duration-200
`;

export default function ButtonCTA({ 
  text = "Projekt starten", 
  href = "/Kontakt", 
  onClick,
  type,
  disabled = false,
  fullWidth = false
}: ButtonCTAProps) {
  const widthClass = fullWidth ? 'w-full' : 'w-fit';
  
  if (type) {
    return (
      <button 
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${buttonClasses} ${widthClass}`}
      >
        <h5 className={textClasses}>
          {text}
        </h5>
      </button>
    );
  }

  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`${buttonClasses} ${widthClass}`}
    >
      <h5 className={textClasses}>
        {text}
      </h5>
    </Link>
  );
}

