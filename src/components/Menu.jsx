import React from 'react'
import Link from './Link';

function Menu() {
    const links = [
        { title: 'Home', to: '/home' },
        { title: 'Cities', to: '/cities' },
    ];
  return (
        links.map((link) => (<Link className="hidden sm:flex flex-row mr-4 sm:text-base" key={link.title} title={link.title} to={link.to}/>))
     )
}

export default Menu