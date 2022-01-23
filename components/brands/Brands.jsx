import Image from 'next/image';
import s from './Brands.module.scss';

export default function Brands() {
  return (
    <section className={s.wrapper__brands}>
      <div className={s.brand}>
        <Image src="/images/disnep.png" alt="Disnap" layout="fill" objectFit="cover" />
        <video autoPlay loop playsInline className={s.hidden}>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={s.brand}>
        <Image src="/images/pixar.png" alt="Disnap" layout="fill" objectFit="cover" />
        <video autoPlay loop playsInline className={s.hidden}>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={s.brand}>
        <Image src="/images/marvel.png" alt="Disnap" layout="fill" objectFit="cover" />
        <video autoPlay loop playsInline className={s.hidden}>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={s.brand}>
        <Image src="/images/starwars.png" alt="Disnap" layout="fill" objectFit="cover" />
        <video autoPlay loop playsInline className={s.hidden}>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={s.brand}>
        <Image src="/images/national-geographic.png" alt="Disnap" layout="fill" objectFit="cover" />
        <video autoPlay loop playsInline className={s.hidden}>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
