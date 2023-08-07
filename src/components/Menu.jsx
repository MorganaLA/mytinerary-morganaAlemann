import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    const links = [
        { title: 'Home', to: '/home' },
        { title: 'Cities', to: '/cities' },
    ];
  return (
        links.map((link) => (<Link className="hidden md:flex flex-row mr-4 md:text-base" key={link.title} to={link.to}>{link.title}</Link>))
     )
}

export default Menu