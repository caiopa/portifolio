import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Perfil from './paginas/perfil';

function App() {
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

  return (
    <main className="vh-100 text-white">
      <div className="scroll-progress"></div>
      <Perfil />
    </main>
  );
}

export default App;
