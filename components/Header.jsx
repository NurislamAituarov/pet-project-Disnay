import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Home from './svg/Home';
import Search from './svg/SearchSVG';
import Plus from './svg/Plus';
import Star from './svg/Star';
import Movie from './svg/Movie';
import Series from './svg/Series';

import s from './Header.module.scss';
import cn from 'classnames';
import BurgerMenu from './burger-menu/BurgerMenu';
import { useEffect, useRef, useState } from 'react';

export default function Header({ session, setSession }) {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const router = useRouter();
  const navRef = useRef();

  useEffect(() => {
    function resize(e) {
      if (document.body.clientWidth > 768) {
        setHamburgerClick(false);
      }
    }
    resize();
    window.addEventListener('resize', resize);
  }, [hamburgerClick]);

  return (
    <header className={s.header}>
      {session && (
        <BurgerMenu setHamburgerClick={setHamburgerClick} hamburgerClick={hamburgerClick} />
      )}
      <div className="flex">
        <Link href="/">
          <a>
            <Image src="/images/logo.svg" width={80} height={80} alt="logo" layout="fixed" />
          </a>
        </Link>

        {session && (
          <nav
            style={hamburgerClick ? { display: 'block' } : null}
            ref={navRef}
            className={cn(s.nav, {
              [s.navMobile]: hamburgerClick,
              [s.fade]: hamburgerClick,
            })}>
            <Link href="/">
              <a
                className={cn(s.home_svg, {
                  [s.line]: router.asPath === '/',
                })}>
                <Home />
                <span className={s.span}>Home</span>
              </a>
            </Link>
            <Link href="/search">
              <a
                className={cn(s.home_svg, {
                  [s.line]: router.asPath === '/search',
                })}>
                <Search />
                <span className={cn(s.span)}>Search</span>
              </a>
            </Link>
            <Link href="/future">
              <a className={s.home_svg}>
                <Plus />
                <span className={s.span}>WatchList</span>
              </a>
            </Link>
            <Link href="/future">
              <a className={s.home_svg}>
                <Star />
                <span className={s.span}>Originals</span>
              </a>
            </Link>
            <Link href="/future">
              <a className={s.home_svg}>
                <Movie />
                <span className={s.span}>Movies</span>
              </a>
            </Link>
            <Link href="/future">
              <a className={s.home_svg}>
                <Series />
                <span className={s.span}>Series</span>
              </a>
            </Link>
          </nav>
        )}
      </div>

      {!session ? (
        <button
          onClick={() => {
            setSession(true);
            document.cookie = 'session=true';
          }}
          className={s.button}>
          Login
        </button>
      ) : (
        <svg
          className={s.myFoto}
          onClick={() => setSession(false)}
          width="30"
          height="25"
          viewBox="0 0 20 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3154 14.1014 15.6903 13.4763C15.0652 12.8512 14.2173 12.5 13.3333 12.5H6.66659C5.78253 12.5 4.93468 12.8512 4.30956 13.4763C3.68444 14.1014 3.33325 14.9493 3.33325 15.8333V17.5"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0001 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10.0001 2.5C8.15913 2.5 6.66675 3.99238 6.66675 5.83333C6.66675 7.67428 8.15913 9.16667 10.0001 9.16667Z"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </header>
  );
}
