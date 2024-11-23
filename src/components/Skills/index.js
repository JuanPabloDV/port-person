import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiVuejs, mdiLanguageJavascript, mdiLanguageHtml5, mdiBootstrap, mdiLanguageCss3, mdiLanguageTypescript, mdiReact, mdiLanguagePython, mdiLanguageJava, mdiLanguagePhp } from '@mdi/js';
import './style.css';
import ScrollReveal from 'scrollreveal';

const Skills = () => {
    useEffect(() => {
        const options = {
          origin: 'bottom',
          distance: '100px',
          duration: 1000,
          delay: 30,
          reset: true,
        };
    
        ScrollReveal().reveal('.skills', options);
      }, []);

    return (
        <section className="skills" id="skills">
            <h2 className="title">Tecnologias</h2>
            <h4>Pontos fortes</h4>
            <div className="cards-wrapper">
                <div className="card-skill">
                    <div className="card-inner">
                        <div className="card-front">
                            <Icon className="card-icon" path={mdiLanguageHtml5} title="HTML5"/>
                            <p>HTML</p>
                        </div>
                        <div className="card-back">
                            <span>1 ano de experiência prática</span>
                        </div>
                    </div>
                </div>

                <div className="card-skill">
                    <div className="card-inner">
                        <div className="card-front">
                            <Icon className="card-icon" path={mdiLanguageCss3} title="CSS3"/>
                            <p>CSS</p>
                        </div>
                        <div className="card-back">
                            <span>1 ano de experiência prática</span>
                        </div>
                    </div>
                </div>

                <div className="card-skill">
                    <div className="card-inner">
                        <div className="card-front">
                            <Icon className="card-icon" path={mdiLanguageJavascript} title="Javascript"/>
                            <p>Javascript</p>
                        </div>
                        <div className="card-back">
                            <span>1 ano de experiência prática</span>
                        </div>
                    </div>
                </div>

                <div className="card-skill">
                    <div className="card-inner">
                        <div className="card-front">
                            <Icon className="card-icon" path={mdiBootstrap} title="Bootstrap"/>
                            <p>Bootstrap</p>
                        </div>
                        <div className="card-back">
                            <span>1 ano de experiência prática</span>
                        </div>
                    </div>
                </div>

                <div className="card-skill">
                    <div className="card-inner">
                        <div className="card-front">
                            <Icon className="card-icon" path={mdiVuejs} title="VueJS"/>
                            <p>VueJS</p>
                        </div>
                        <div className="card-back">
                            <span>1 ano de experiência prática</span>
                        </div>
                    </div>
                </div>
            </div>

            <h4>Em desenvolvimento</h4>
            <div>
                <div className="cards-wrapper">
                    <div className="card-skill">
                        <div className="card-inner">
                            <div className="card-front">
                                <Icon className="card-icon" path={mdiLanguageTypescript} title="Typescript"/>
                                <p>Typescript</p>
                            </div>
                            <div className="card-back">
                                <span>Experiência apenas em estudos e projetos pessoais</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="card-inner">
                            <div className="card-front">
                                <Icon className="card-icon" path={mdiReact} title="React"/>
                                <p>React</p>
                            </div>
                            <div className="card-back">
                                <span>Experiência apenas em estudos e projetos pessoais</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="card-inner">
                            <div className="card-front">
                                <Icon className="card-icon" path={mdiLanguagePython} title="Python"/>
                                <p>Python</p>
                            </div>
                            <div className="card-back">
                                <span>Experiência em trabalhos e projetos da faculdade</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="card-inner">
                            <div className="card-front">
                                <Icon className="card-icon" path={mdiLanguageJava} title="Java"/>
                                <p>Java</p>
                            </div>
                            <div className="card-back">
                                <span>Experiência em trabalhos e projetos da faculdade</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="card-inner">
                            <div className="card-front">
                                <Icon className="card-icon" path={mdiLanguagePhp} title="PHP"/>
                                <p>PHP</p>
                            </div>
                            <div className="card-back">
                                <span>Experiência apenas em estudos e atual principal foco de estudo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
