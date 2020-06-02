import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="flex justify-center flex-shrink-0 w-full border-t py-2 bg-white">
      <div className="flex flex-col">
        <a href="https://github.com/cakirilker/blog" target="_blank" className="flex justify-center mb-2 text-gray-500 hover:text-black transition duration-500 ease-in-out">
          <FontAwesomeIcon icon={faGithub} className="mx-auto fill-current" size="2x" />
        </a>
        <p className="text-sm text-gray-500 m-0">made with<FontAwesomeIcon icon={faHeart} className="mx-1 fill-current text-red-600" />by Ilker Cakir</p>
      </div>
    </footer>
  );
};

export default Footer;
