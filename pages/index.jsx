import { useEffect, useState } from 'react';

import Brands from '../components/brands/Brands';
import Collection from '../components/collections/Collection';
import Slider from '../components/slider/Slider';
import MainLayout from '../layout/MainLayout';
import styles from '../styles/Home.module.scss';

export default function Home({ popularMovies, popularShow, top_ratedShow, top_ratedMovies }) {
  return (
    <MainLayout title="Home">
      <Slider />
      <Brands />
      <Collection title="Popular Movies" results={popularMovies} />
      <Collection title="Popular Show" results={popularShow} />
      <Collection title="Top Rated Show" results={top_ratedShow} />
      <Collection title="Top Rated Movies" results={top_ratedMovies} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  console.log('server');

  const [popularMoviesRes, popularShowRes, top_ratedMoviesRes, top_ratedShowRes] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`,
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`,
      ),
    ]);

  const [popularMovies, popularShow, top_ratedMovies, top_ratedShow] = await Promise.all([
    popularMoviesRes.json(),
    popularShowRes.json(),
    top_ratedShowRes.json(),
    top_ratedMoviesRes.json(),
  ]);

  return {
    props: {
      popularMovies: popularMovies.results,
      popularShow: popularShow.results,
      top_ratedShow: top_ratedShow.results,
      top_ratedMovies: top_ratedMovies.results,
    },
  };
}
