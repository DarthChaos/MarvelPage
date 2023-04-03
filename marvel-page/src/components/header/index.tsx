import React from "react";
import Container from "../container";
import JoinButton from "./JoinButton";
import SubscriptionsSearchButtons from "./SubscriptionsSearchButtons";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <div className='bg-light-black fixed w-full text-white z-50'>
      <Container className='h-14 border-b border-solid border-dark-gray'>
        <div className='h-[inherit] flex justify-between'>
          <JoinButton />
          <div className='h-[55px] w-32 bg-red-600'>
            <a href='/'>{/* <span></span> */}</a>
          </div>
          <SubscriptionsSearchButtons />
        </div>
      </Container>
      <Container className='h-10'>
        <nav>
          <NavItems />
        </nav>
      </Container>
    </div>
  );
};

export default Header;
