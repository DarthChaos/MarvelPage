import React from "react";

type DescriptorProps = {
  title: string;
  description: string;
};

const Descriptor = ({ title, description }: DescriptorProps) => {
  return (
    <div>
      <h2 className='font-bold text-xl'>{title}:</h2>
      <div className='text-base'>{description}</div>
    </div>
  );
};

export default Descriptor;
