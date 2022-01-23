import Image from 'next/image';
import { useState } from 'react';
import s from './Search.module.scss';
import cn from 'classnames';
import ContentLoader from 'react-content-loader';

export default function Search({ name }) {
  const [state, setState] = useState([]);
  const [indexCharacter, setIndexCharacter] = useState(0);
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  function request(e) {
    let value = e.target.value;
    value &&
      fetch(`
    https://api.themoviedb.org/3/search/person?api_key=${process.env.API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((res) => {
          setState(res.results);
        });
  }

  function debounce(fn) {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);

      timeout = setTimeout(fnCall, 500);
    };
  }
  request = debounce(request);

  return (
    <div className={cn(s.wrapper__search, 'flex')}>
      {Boolean(state.length) && (
        <div className={s.character__first}>
          <h1>{state[indexCharacter].title || state[indexCharacter].name}</h1>
          <Image
            src={`${BASE_URL}${state[indexCharacter].profile_path}`}
            alt="character"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className={cn(s.container__img)}>
        {Boolean(state.length) &&
          state.map((item, i) => {
            if (item.profile_path) {
              return (
                <Image
                  onClick={() => setIndexCharacter(i)}
                  key={item.id}
                  src={`${BASE_URL}${item.profile_path}`}
                  alt="character"
                  width="200px"
                  height="200px"
                  objectFit="cover"
                />
              );
            } else {
              return (
                <ContentLoader
                  key={i}
                  speed={2}
                  width={177}
                  height={162}
                  viewBox="0 0 177 162"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#b0b0b0">
                  <rect x="97" y="95" rx="0" ry="0" width="0" height="1" />
                  <rect x="96" y="96" rx="0" ry="0" width="1" height="0" />
                  <rect x="100" y="283" rx="0" ry="0" width="10" height="2" />
                  <rect x="89" y="281" rx="0" ry="0" width="21" height="1" />
                  <rect x="167" y="237" rx="0" ry="0" width="0" height="1" />
                  <rect x="289" y="130" rx="0" ry="0" width="0" height="1" />
                  <rect x="265" y="257" rx="0" ry="0" width="2" height="0" />
                  <rect x="446" y="93" rx="0" ry="0" width="134" height="138" />
                  <rect x="68" y="230" rx="0" ry="0" width="40" height="13" />
                  <rect x="68" y="250" rx="0" ry="0" width="40" height="13" />
                  <rect x="19" y="15" rx="10" ry="10" width="141" height="147" />
                </ContentLoader>
              );
            }
          })}
      </div>

      <div className={s.container}>
        <input onKeyUp={request} type="text" placeholder="Search..." />
        <div className={s.search}></div>
      </div>
    </div>
  );
}
