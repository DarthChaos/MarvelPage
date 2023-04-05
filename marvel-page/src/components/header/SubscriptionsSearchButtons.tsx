import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const EndButtons = () => {
  return (
    <>
      <div className='border-x border-solid border-dark-gray hidden lg:flex'>
        <div className='px-3.5 border-r border-solid border-dark-gray cursor-pointer flex h-14'>
          <Image
            className='my-auto mr-2.5'
            width={22}
            height={25}
            src='https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png'
            alt='Marvel Unlimited'
          />
          <div className='flex flex-col my-auto'>
            <p className='font-bold text-xs tracking-1px text-center uppercase'>
              MARVEL UNLIMITED
            </p>
            <p className='font-bold text-[10px] tracking-1px text-center uppercase'>
              SUSCRIBE
            </p>
          </div>
        </div>
        <div className='px-3.5 my-auto h-4'>
          <CiSearch size='17px' />
        </div>
      </div>
      <div className='lg:hidden flex items-center'>
        <CiSearch size='25px' />
      </div>
    </>
  );
};

export default EndButtons;
