import Container from "@/components/container";
import React from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri";

const SubHeader = () => {
  return (
    <Container className='pt-[52px] lg:pt-24 bg-dark-black fixed w-full z-40 shadow-none'>
      <div className='h-[42px] flex justify-between'>
        <a className='flex decoration-transparent items-center'>
          <IoArrowBack size='24px' color='#DC2626' />
          <span className='font-bold text-xs tracking-1px ml-2 uppercase'>
            BACK TO SERIES
          </span>
        </a>
        <div className='flex gap-4 my-auto'>
          <RiFacebookBoxFill size='25px' />
          <RiTwitterFill size='25px' />
        </div>
      </div>
    </Container>
  );
};

export default SubHeader;
