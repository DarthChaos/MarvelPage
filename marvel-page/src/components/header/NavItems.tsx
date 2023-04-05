import React, { useContext } from "react";
import navIcons from "../../data/headerNavIcons.json";
import { RiCloseLine } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { PortalContext } from "@/context/PortalContext";
import { PortalContextType } from "@/@types/portal/portal";

const NavItems = () => {
  const { toggleMount } = useContext(PortalContext) as PortalContextType;

  const onCloseClick = () => {
    toggleMount();
  };

  return (
    <nav className='h-[inherit]'>
      <ul className='flex flex-col lg:flex-row justify-start lg:justify-center pl-[30px] lg:pl-0 py-[10px] lg:py-0 pr-[15px] lg:pr-0 text-white h-[inherit] lg:h-10'>
        <li className='flex lg:hidden'>
          <button className='-ml-2 mb-8' onClick={onCloseClick}>
            <RiCloseLine size={40} />
          </button>
        </li>
        {navIcons.map(({ name: label }) => (
          <li
            className='lg:px-5 py-[15px] lg:py-0 cursor-pointer list-none'
            key={`nav-item-${label}`}>
            <div className='font-bold tracking-1px text-base leading-5 lg:text-xs lg:leading-[1px] border-b-2 border-transparent flex items-center h-full uppercase lg:hover:border-red-600 lg:active:border-red-600'>
              <a href='#'>{label}</a>
              <span className='fill-black -mt-0.5 ml-auto'>
                <FiChevronRight color='red' size={25} />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
