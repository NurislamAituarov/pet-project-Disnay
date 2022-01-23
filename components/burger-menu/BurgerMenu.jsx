import cn from 'classnames';
import { useEffect, useRef } from 'react';
import s from './BurgerMenu.module.scss';

export default function BurgerMenu({ hamburgerClick, setHamburgerClick }) {
  useEffect(() => {
    const refInput = document.getElementById('checkbox4');

    function resize() {
      if (document.body.clientWidth > 768) {
        refInput.checked = false;
      }
    }

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [hamburgerClick]);

  return (
    <div className={s.container__hamburger}>
      <input type="checkbox" id="checkbox4" className={cn(s.checkbox4, s.visuallyHidden)} />
      <label htmlFor="checkbox4" onClick={() => setHamburgerClick(!hamburgerClick)}>
        <div className={cn(s.hamburger, s.hamburger4)}>
          <span className={cn(s.bar, s.bar1)}></span>
          <span className={cn(s.bar, s.bar2)}></span>
          <span className={cn(s.bar, s.bar3)}></span>
          <span className={cn(s.bar, s.bar4)}></span>
          <span className={cn(s.bar, s.bar5)}></span>
        </div>
      </label>
    </div>
  );
}
