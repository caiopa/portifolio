import React, { useEffect } from 'react';
import './App.css';
import Perfil from './pages/perfil';

function App() {
  useEffect(() => {
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
