import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../layout/MainLayout';
import s from './WatchList.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import Plus from '../../components/svg/Plus';
import { deletedList } from '../../redux/Slice';

export default function WatchList() {
  const itemList = useSelector((state) => state.reducer.watchListMovie);
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const [showTitle, setShowTitle] = useState('');
  const dispatch = useDispatch();

  function onMouseEnter(str) {
    setShowTitle(str);
  }

  function onMouseLeave() {
    setShowTitle('');
  }

  return (
    <MainLayout title="WatchList">
      <div className={s.wrapper}>
        {itemList.map((item, i) => {
          return (
            <div
              tabIndex={0}
              // onKeyPress={(e) => {
              //   if (e.code === 'Enter') {
              //     onMouseEnter(item.id);
              //   }
              // }}
              onMouseEnter={() => onMouseEnter(item.id)}
              onMouseLeave={onMouseLeave}
              onFocus={() => onMouseEnter(item.id)}
              className={s.item}
              key={item.id + item.name || item.title}>
              <Image
                objectFit="cover"
                layout="fill"
                src={`${BASE_URL}${item.poster_path}`}
                alt={item.name}
              />
              <div onClick={() => dispatch(deletedList(item.id))} className={s.delete}>
                <Plus />
              </div>
              <div
                className={cn(s.item__title, {
                  [s.showTitle]: item.id === showTitle,
                })}>
                <h2>{item.title || item.name}</h2>
                <strong>{item.first_air_date || item.release_date}</strong>
                <p>{item.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}
