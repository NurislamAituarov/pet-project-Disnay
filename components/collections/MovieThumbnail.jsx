import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import s from './Collection.module.scss';

export default function MovieThumbnail({ result, name }) {
  const [showTitle, setShowTitle] = useState(false);

  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      onClick={() => router.push(`/${name}/${result.id}`)}
      className={s.collection__image}>
      <Image
        width={330}
        height={210}
        objectFit="cover"
        layout="fixed"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt={result.name}
      />
      {showTitle && <p>{result.title || result.original_name}</p>}
    </div>
  );
}
