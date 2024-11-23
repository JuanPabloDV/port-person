import React, { useEffect } from 'react';
import './style.css';
import { Typewriter } from 'react-simple-typewriter'
import ScrollReveal from 'scrollreveal';

export default function Banner() {
    useEffect(() => {
        const options = {
          distance: '100px',
          duration: 2000,
          reset: true,
        };
    
        ScrollReveal().reveal('.banner-section', options);
      }, []);
    return (
        <section className="banner-section" id="home">
            <div>
                <h4>Olá, meu nome é Juan Pablo</h4>
                <h3 style={{ paddingTop: '0', margin: '0', fontWeight: 'normal' }}>
                    <span style={{ color: 'transparent', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Sou Desenvolvedor']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </h3>
                <button><a href="#about">Sobre mim</a></button>
            </div>
        </section>
    )
}