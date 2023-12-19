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
            <p>Juan Pablo, 19 anos, cursando o 4º semestre de <strong>Sistemas da Informação</strong>. Possuo habilidades em desenvolvimento web front-end, experiência com <strong>Bootstrap</strong> para criar interfaces responsivas e <strong>Vue.js</strong> para a construção de aplicações dinâmicas. Além disso, estou em busca de aprimorar minhas habilidades no back-end, assim podendo futuramente me considerar um desenvolvedor Full-stack.</p>
            <div>
              <button><a href="https://drive.google.com/file/d/1guiU9oCYUJfgnQ9QwcNQAsrSCd7KZygI/view?usp=drive_link" target='_blank' rel='noopener noreferrer'>Currículo</a></button>
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