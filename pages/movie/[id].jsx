import { useState } from 'react';
import Image from 'next/image';

import MainLayout from '../../layout/MainLayout';
import Play from '../../components/svg/Play';
import cn from 'classnames';
import Group from '../../components/svg/Group';
import Plus from '../../components/svg/Plus';
import Rating from '../../components/rating/Rating';
import Added from '../../components/svg/Added';

import s from '../../styles/Home.module.scss';
import ReactPlayer from 'react-player';

export default function Movie({ result }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [addMovie, setAddMovie] = useState(0);
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  const index = showPlayer && result.videos.results.findIndex((el) => el.type === 'Trailer');

  return (
    <MainLayout title={result.title || result.original_title} session>
      <div style={showPlayer ? { opacity: '0.3' } : { opacity: '1' }} className={s.movie__wrapper}>
        <Image
          objectFit="cover"
          layout="fill"
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          alt={result.name}
        />
      </div>
      <div className={s.movie__wrapper_title}>
        <h1>{result.title || result.original_title}</h1>
        <div className={cn(s.movie__wrapper_btn, 'flex')}>
          <div className={s.movie__btn}>
            <Play />
            <button>Play</button>
          </div>
          <div
            onClick={() => setShowPlayer(true)}
            className={cn(s.movie__btn, {
              [s.movie__btnTwo]: true,
            })}>
            <Play color="white" />
            <button>Tailer</button>
          </div>
          <div onClick={() => setAddMovie(addMovie + 1)} className={s.movie__wrapper_svg}>
            {!addMovie ? <Plus width="25" height="25" /> : <Added />}
          </div>
          <div className={s.movie__wrapper_svg}>
            <Group color="white" />
          </div>
        </div>
        <Rating />
        <p className={s.subtitle}>
          {result.release_date || result.first_air_date}
          {'  '}
          {Math.floor(result.runtime / 60)}h {result.runtime % 60}m{' '}
          {result.genres.map((item) => item.name + ' ')}
        </p>
        <h4>{result.overview}</h4>
      </div>

      {/* Bg overlay */}
      {showPlayer && (
        <div className={cn(s.showPlayer, 'fade')}>
          <div className={cn(s.showPlayer__title, 'flex')}>
            <span>Play Trailer</span>
            <div onClick={() => setShowPlayer(false)}>
              <Plus width={20} />
            </div>
          </div>
          <div className={s.showPlayer__youtube}>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              playing={showPlayer}
              url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
            />
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  console.log(context);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`,
  );
  const result = await response.json();

  return {
    props: { result },
  };
}
