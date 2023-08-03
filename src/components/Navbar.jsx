import React from 'react';
import Link from './Link';
import Title from './Title';
import Button from './Button';

function Navbar() {
  const links = [
    { title: 'Home', to: '/home' },
    { title: 'Cities', to: '/cities' },
  ];

  const ImgLogin = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>)
  

  return (
    <header className='navbar font-custom flex justify-between items-center text-base font-semibold'>
      <Title />
      <nav className="flex justify-around items-center">
        {links.map((link) => (
          <Link key={link.title} title={link.title} to={link.to} />
        ))}
        <Button
          img={<ImgLogin/>}
          title='Login'
          className="flex flex-row items-center mx-2"
          to='/Login'
        />
      </nav>
    </header>
  );
}

export default Navbar;
