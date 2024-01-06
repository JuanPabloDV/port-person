import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import constructionImage from '../../img/construction.svg'
import './style.css'
import ScrollReveal from 'scrollreveal';
import apiImage from '../../img/api-image.svg'
import Icon from '@mdi/react';
import { mdiLanguageJavascript, mdiNodejs, mdiDatabase } from '@mdi/js';

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
                        perPage: 1,
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
                        <img src={apiImage} alt="Imagem de api"></img>
                        <h5>Api de filmes</h5>
                        <span>Desenvolvida com intenção de aprender e melhorar conhecimento de criações de API conectadas com banco de dados.</span>
                        <div className="card-tecnologic-wrapper">
                            <Icon className="card-tecnologic-icon" path={mdiLanguageJavascript} title="Javascript"/>
                            <Icon className="card-tecnologic-icon" path={mdiNodejs} title="NodeJS"/>
                            <Icon className="card-tecnologic-icon" path={mdiDatabase} title="MongoDB"/>
                        </div>
                        <div className="project-button-wrapper">
                            <button><a href="https://github.com/JuanPabloDV/starwars-api" target='blank'>GitHub</a></button>
                        </div>
                    </div>
                </SplideSlide>
                
                {/* <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button><a href="/">Ver</a></button>
                            <button><a href="/">GitHub</a></button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button><a href="/">Ver</a></button>
                            <button><a href="/">GitHub</a></button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button><a href="/">Ver</a></button>
                            <button><a href="/">GitHub</a></button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card-project">
                        <img src={constructionImage} alt="Imagem em construção"></img>
                        <span>Projeto em construção</span>
                        <div className="project-button-wrapper">
                            <button><a href="/">Ver</a></button>
                            <button><a href="/">GitHub</a></button>
                        </div>
                    </div>
                </SplideSlide> */}
            </Splide>
        </section>
    )
}

export default Projects