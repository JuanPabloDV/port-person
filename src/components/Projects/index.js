import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import constructionImage from '../../img/construction.svg'
import './style.css'
import ScrollReveal from 'scrollreveal';

const Projects = () => {
    useEffect(() => {
        const options = {
          origin: 'bottom',
          distance: '50px',
          duration: 1000,
          delay: 30,
          reset: true,
        };
    
        ScrollReveal().reveal('.projects', options);
      }, []);

    return (
        <section className="projects" id="projects">
            <h2 className="title">Projetos</h2>
            <Splide aria-label="My Favorite Images" options={ {
                        rewind: true,
                        width : 1200,
                        gap   : '1rem',
                        perPage: 5,
                        arrows: false,
                        pagination: false,
                        breakpoints: {
                            500: {
                                perPage: 1,
                            },
                            768: {
                                perPage: 2,
                            },
                            900: {
                                perPage: 3,
                            },
                            1200: {
                                perPage: 4,
                                width: '100%',
                            }
                      }
                    }}>
                <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button>Ver</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button>Ver</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button>Ver</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button>Ver</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button>Ver</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </section>
    )
}

export default Projects