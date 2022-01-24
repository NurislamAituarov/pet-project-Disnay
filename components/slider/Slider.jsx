import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import s from './Slider.module.scss';

export default function Slider() {
  return (
    <section className={s.wrapper__slider}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div>
          <img loading="lazy" alt="" src="/images/slider-1.jpg" />
        </div>
        <div>
          <img loading="lazy" alt="" src="/images/slider-2.jpg" />
        </div>
        <div>
          <img loading="lazy" alt="" src="/images/slider-3.jpg" />
        </div>
        <div>
          <img loading="lazy" alt="" src="/images/slider-4.jpeg" />
        </div>
      </Carousel>
    </section>
  );
}
