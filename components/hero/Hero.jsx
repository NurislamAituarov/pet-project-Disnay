import Image from 'next/image';
import s from './Hero.module.scss';
// import twoImg from '../../public/images/cta-logo-two.png';

export default function Hero() {
  return (
    <div className={s.hero__wrapper}>
      <div className={s.hero}>
        <Image src="/images/cta-logo-one.svg" alt="дисней" width="600" height="150" />
        <button>Get all there</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab veritatis ipsa dolorum
          necessitatibus tempora adipisci asperiores aliquam id, excepturi doloribus ullam eveniet
          nam rem quod aspernatur ipsam accusamus ut?
        </p>
        <Image
          className={s.logoTwo}
          width="600"
          height="40"
          src="/images/cta-logo-two.png"
          alt="список картинок"
        />
      </div>
    </div>
  );
}
