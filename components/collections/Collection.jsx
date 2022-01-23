import s from './Collection.module.scss';
import MovieThumbnail from './MovieThumbnail';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export default function Collection({ title, results }) {
  const [namePopular, setNamePopular] = useState('');
  useEffect(() => {
    if (title === 'Popular Movies' || title === 'Top Rated Show') {
      setNamePopular('movie');
    } else {
      setNamePopular('show');
    }
  }, [title]);

  return (
    <div className={s.wrapper__collections}>
      <h2>{title}</h2>

      <div className={cn(s.wrapper__collections_images)}>
        {results.map((item) => {
          return <MovieThumbnail key={item.id} result={item} name={namePopular} />;
        })}
      </div>
    </div>
  );
}
