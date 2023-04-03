import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri";
import Descriptor from "./Descriptor";

const Comic = () => {
  return (
    <div className='text-white'>
      <Container className='pt-24 bg-dark-black fixed w-full z-40'>
        <div className='h-11 flex justify-between'>
          <a className='flex my-auto decoration-transparent'>
            <IoArrowBack size='24px' color='#DC2626' />
            <span className='ml-2'>BACK TO SERIES</span>
          </a>
          <div className='flex gap-4 my-auto'>
            <RiFacebookBoxFill size='25px' />
            <RiTwitterFill size='25px' />
          </div>
        </div>
      </Container>
      <div className="bg-[url('https://cdn.marvel.com/u/prod/marvel/i/mg/1/50/640905ae87977/clean.jpg')] bg-black bg-no-repeat bg-[left_8rem] h-screen bg-fixed bg-cover">
        <div className='w-screen h-screen backdrop-blur-md bg-black/80 pt-40'>
          <Container>
            <div className='py-5 sm:py-12 grid grid-cols-10 gap-10'>
              <div className='col-span-3'>
                <Image
                  width={350}
                  height={530}
                  src='https://cdn.marvel.com/u/prod/marvel/i/mg/1/50/640905ae87977/clean.jpg'
                  alt='comic portrait'
                />
              </div>
              <div className='col-span-7'>
                <h1 className='font-extrabold text-[26px] mb-5'>
                  Wasp (2023) #3
                </h1>
                <div className='flex flex-col gap-5 mb-8'>
                  <Descriptor title='Published' description='March 22, 2023' />
                  <div className='grid grid-cols-2 gap-y-5'>
                    <Descriptor title='Writer' description='Al Ewing' />
                    <Descriptor title='Penciler' description='Kasia Nie' />
                    <Descriptor title='Cover Artist' description='Tom Reilly' />
                  </div>
                </div>
                <div className='grid grid-cols-2 mb-5'>
                  <p className='text-sm font-normal col-span-1'>
                    WHO MADE THE WASP? Captured by an alliance of their oldest
                    enemies, Janet and Nadia Van Dyne find themselves trapped in
                    a past where a key part of their history - Henry Pym, the
                    Ant-Man - never existed at all. As strange new lives play
                    out around them, they must find their way back to the
                    Wasp...or cease to exist entirely.
                  </p>
                </div>
                <a href='#' className='font-normal text-sm mr-2 flex'>
                  SEE VARIANT COVERS
                  <span>
                    <IoArrowForward size={20} color='#DC2626' />
                  </span>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Comic;
