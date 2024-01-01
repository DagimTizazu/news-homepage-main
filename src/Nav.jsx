import React from 'react'
import logo from './assets/images/logo.svg';
import hamburger from './assets/images/icon-menu.svg';
import close from './assets/images/icon-menu-close.svg';

function handleClick() {
  const navMenu = document.querySelector('.nav__menu');
  const navMenuClose = document.querySelector('.nav__menu__close');
  const navHamburger = document.querySelector('.nav__hamburger');
  const body = document.querySelector('body');
  const bodyBefore = document.querySelector('body::before');

  navMenu.classList.toggle('is-open');
  navMenuClose.classList.toggle('is-open');
  navHamburger.classList.toggle('is-open');
  body.classList.toggle('is-open');
  bodyBefore.classList.toggle('is-open');
}

function Nav() {
  return (
    <nav>
      <div className='nav__container'>
          <img className='nav__logo' src={logo} alt='logo' />
        <img className='nav__hamburger' src={hamburger} alt='hamburger-menu' onClick={handleClick} />
        <img className='nav__menu__close' src={close} alt='close-button' onClick={handleClick} />
        </div>
      <div className='nav__menu'>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html">New</a></li>
          <li><a href="index.html">Popular</a></li>
          <li><a href="index.html">Trending</a></li>
          <li><a href="index.html">Categories</a></li>
          </ul>
      </div>
      
    </nav>
  )
}

export default Nav
