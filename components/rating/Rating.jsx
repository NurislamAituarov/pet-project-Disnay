import { useEffect, useState } from 'react';
import s from './Rating.module.scss';
import cn from 'classnames';

export default function Rating({ vote_average }) {
  const [rating, setRating] = useState(0);
  const [arrayRating, setArrayRating] = useState(new Array(5).fill(<></>));

  useEffect(() => {
    constructorRating(rating);
  }, [rating]);

  useEffect(() => {
    if (vote_average > 1) {
      setRating(1);
    }
    if (vote_average > 3) {
      setRating(2);
    }
    if (vote_average > 4) {
      setRating(3);
    }
    if (vote_average > 7) {
      setRating(4);
    }
    if (vote_average > 9) {
      setRating(5);
    }
  }, [vote_average]);

  function changeDisplay(num) {
    constructorRating(num);
  }

  function onClick(num) {
    setRating(num);
  }

  const constructorRating = (currentRating) => {
    const updatedArray = arrayRating.map((item, i) => {
      return (
        <svg
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          className={cn({
            [s.star]: currentRating > i,
          })}
          key={i}
          width="35"
          height="31"
          viewBox="0 0 35 31"
          fill="black"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M17.4592 1.96474L20.9236 12.2334L21.0384 12.5736H21.3974L32.5548 12.5736L23.5446 18.8782L23.2378 19.0929L23.3575 19.4477L26.8092 29.6786L17.7459 23.3369L17.4592 23.1363L17.1726 23.3369L8.10932 29.6786L11.561 19.4477L11.6807 19.0929L11.3739 18.8782L2.36372 12.5736L13.5211 12.5736H13.8801L13.9949 12.2334L17.4592 1.96474Z" />
        </svg>
      );
    });

    setArrayRating(updatedArray);
  };

  return (
    <div className={cn(s.wrapper__rating)}>
      {arrayRating.map((item, i) => {
        return <span key={i}>{item}</span>;
      })}
    </div>
  );
}
