import React from "react";

interface IButton {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full flex items-center gap-3 group ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
