import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Perfil from './paginas/perfil';

function App() {
  const [clickRipple, setClickRipple] = useState<{
    x: number;
    y: number;
    id: number;
  } | null>(null);
  const rippleId = useRef(0);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (progressBar) {
        const currentScroll = window.pageYOffset;
        const scrollProgress = (currentScroll / maxScrollHeight) * 100;

        progressBar.style.width = `${scrollProgress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.detail === 0) return;

    rippleId.current += 1;
    setClickRipple({
      x: event.clientX,
      y: event.clientY,
      id: rippleId.current,
    });
  };

  return (
    <main className="vh-100 text-white" onClick={handleClick}>
      <div className="scroll-progress"></div>
      {clickRipple && (
        <span
          key={clickRipple.id}
          className="click-ripple"
          style={{ left: clickRipple.x, top: clickRipple.y }}
          aria-hidden="true"
          onAnimationEnd={() => setClickRipple(null)}
        />
      )}
      <Perfil />
    </main>
  );
}

export default App;
