import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiVuejs, mdiLanguageJavascript, mdiLanguageHtml5, mdiBootstrap, mdiLanguageCss3, mdiLanguageTypescript, mdiReact, mdiLanguagePython } from '@mdi/js';
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
                    <Icon className="card-icon" path={mdiLanguageHtml5} title="HTML5"/>
                    <span>HTML</span>
                </div>

                <div className="card-skill">
                    <Icon className="card-icon" path={mdiLanguageCss3} title="CSS3"/>
                    <span>CSS</span>
                </div>

                <div className="card-skill">
                    <Icon className="card-icon" path={mdiLanguageJavascript} title="Javascript"/>
                    <span>Javascript</span>
                </div>

                <div className="card-skill">
                    <Icon className="card-icon" path={mdiBootstrap} title="Bootstrap"/>
                    <span>Bootstrap</span>
                </div>

                <div className="card-skill">
                    <Icon className="card-icon" path={mdiVuejs} title="VueJS"/>
                    <span>VueJS</span>
                </div>
            </div>

            <h4>Em desenvolvimento</h4>
            <div>
                <div className="cards-wrapper">
                    <div className="card-skill">
                        <Icon className="card-icon" path={mdiLanguageTypescript} title="Typescript"/>
                        <span>Typescript</span>
                    </div>

                    <div className="card-skill">
                        <Icon className="card-icon" path={mdiReact} title="React"/>
                        <span>React</span>
                    </div>

                    <div className="card-skill">
                        <Icon className="card-icon" path={mdiLanguagePython} title="Python"/>
                        <span>Python</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;