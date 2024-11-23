import React, { useEffect  } from 'react';
import Programming from '../../img/programming.svg';
import './style.css';
import ScrollReveal from 'scrollreveal';

const About = () => {
    useEffect(() => {
      const options = {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        delay: 30,
        reset: true,
      };
  
      ScrollReveal().reveal('.about', options);
    }, []);
  
    return (
      <section className="about" id="about">
        <div className="about-wrapper">
          <div className="about-left">
            <h2 className="title">Sobre mim</h2>
            <p>Desenvolvedor web, com experiência em front-end e tecnologias como <strong>Vue.js</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong> e <strong>Bootstrap</strong>, adquirida ao longo de 10 meses de estágio. Atualmente, aprimoro conhecimentos em <strong>PHP</strong> e <strong>Java</strong> no setor de TI da prefeitura, e busco expandir minha atuação para o back-end, visando me tornar um desenvolvedor Full-stack.</p>
            <div>
              <button><a href="https://drive.google.com/file/d/1EyIMfdBcjGrkx4MEL36wshlfTfKWKuzE/view?usp=sharing" target='_blank' rel='noopener noreferrer'>Currículo</a></button>
            </div>
          </div>
  
          <div className="about-right">
            <img src={Programming} alt="Imagem de programação" />
          </div>
        </div>
      </section>
    );
};
  
export default About;