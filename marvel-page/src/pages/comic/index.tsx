import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri";
import Descriptor from "./Descriptor";
import SubHeader from "./SubHeader";

const Comic = () => {
  return (
    <div className='text-white'>
      <SubHeader />
      <div className="bg-black lg:bg-[url('https://cdn.marvel.com/u/prod/marvel/i/mg/1/50/640905ae87977/clean.jpg')] bg-no-repeat bg-[left_8rem] h-auto bg-cover">
        <div className='w-screen backdrop-blur-md bg-black/80 pt-28 lg:pt-40'>
          <Container>
            <div className='py-5 sm:py-8 flex flex-col justify-center lg:flex-row gap-6 lg:gap-16'>
              <div className='min-w-[260px] max-w-[350px] aspect-[260/400] relative text-center'>
                <Image
                  fill
                  src='https://cdn.marvel.com/u/prod/marvel/i/mg/1/50/640905ae87977/clean.jpg'
                  alt='comic portrait'
                />
              </div>
              <div className='w-full'>
                <h1 className='hidden lg:block font-extrabold text-[26px] tracking-1px mb-5'>
                  Wasp (2023) #3
                </h1>
                <div className='flex flex-col gap-5 mb-8'>
                  <Descriptor title='Published' description='March 22, 2023' />
                  <div className='grid grid-cols-2 gap-[30px]'>
                    <Descriptor title='Writer' description='Al Ewing' />
                    <Descriptor title='Penciler' description='Kasia Nie' />
                    <Descriptor title='Cover Artist' description='Tom Reilly' />
                  </div>
                </div>
                <div className='grid mb-5'>
                  <p className='text-base leading-5 tracking-[.5px] lg:max-w-[430px]'>
                    WHO MADE THE WASP? Captured by an alliance of their oldest
                    enemies, Janet and Nadia Van Dyne find themselves trapped in
                    a past where a key part of their history - Henry Pym, the
                    Ant-Man - never existed at all. As strange new lives play
                    out around them, they must find their way back to the
                    Wasp...or cease to exist entirely.
                  </p>
                </div>
                <a
                  href='#'
                  className='font-bold text-xs mr-2 flex items-center'>
                  SEE VARIANT COVERS
                  <span className='ml-2'>
                    <IoArrowForward size={15} color='#DC2626' />
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
