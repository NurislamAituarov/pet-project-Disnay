import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import s from '../styles/Home.module.scss';
import Hero from '../components/hero/Hero';
import { useEffect, useState } from 'react';

const MainLayout = ({ children, title }) => {
  const [session, setSession] = useState(false);
  useEffect(() => {
    function getCookie(name) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + name + '=');
      if (parts.length == 2) return parts.pop().split(';').shift();
    }
    const name = getCookie('session');

    setSession(name);
  }, []);
  return (
    <>
      <Head>
        <title>{session ? title : 'Login'}</title>
      </Head>
      <Header session={session} setSession={setSession} />
      <main className="main">
        <div className={s.container}>{session ? children : <Hero />}</div>
      </main>
    </>
  );
};

export default MainLayout;
