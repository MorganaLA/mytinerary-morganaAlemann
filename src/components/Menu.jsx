import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    const links = [
        { title: 'Home', to: '/home' },
        { title: 'Cities', to: '/cities' },
    ];
  return (
        links.map((link) => (<Link className="hidden mx-2 md:flex flex-row md:text-base hover:-translate-y-0.5 transform transition duration-150 ease-out hover:ease-in hover:scale-110 hover:text-black" key={link.title} to={link.to}>{link.title}</Link>))
     )
}

export default Menu