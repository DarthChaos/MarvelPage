import React, { HTMLAttributes } from "react";

const Container = ({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const newClass = `px-5 ${className}`;

  return (
    <div className={newClass}>
      <div {...props} className='max-w-screen-xl w-full h-[inherit] mx-auto '>
        {children}
      </div>
    </div>
  );
};

export default Container;
