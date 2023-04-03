import React from "react";
import navIcons from "../../data/headerNavIcons.json";

const NavItems = () => {
  return (
    <ul className='flex justify-center h-10'>
      {navIcons.map(({ name: label }) => (
        <li
          className='px-4 font-normal text-xs my-auto cursor-pointer list-none'
          key={`nav-item-${label}`}>
          {label}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
