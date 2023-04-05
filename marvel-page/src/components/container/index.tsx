import React, { HTMLAttributes } from "react";

const Container = ({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const newClass = `${className}`;

  return (
    <div className={newClass}>
      <div
        {...props}
        className='px-5 max-w-[1225px] w-full h-[inherit] mx-auto'>
        {children}
      </div>
    </div>
  );
};

export default Container;
