import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiEmail, mdiWhatsapp } from '@mdi/js';
import './style.css'
import ScrollReveal from 'scrollreveal';

const Contact = () => {
    useEffect(() => {
        const options = {
          origin: 'bottom',
          distance: '0px',
          duration: 1000,
          delay: 30,
          reset: true,
        };
    
        ScrollReveal().reveal('.contact', options);
      }, []);
    return (
        <section className="contact" id="contact">
            <h2 className="title">Contato</h2>
            <div className="contact-wrapper">
                <a href="https://github.com/JuanPabloDV" target='blank'><Icon className="card-icon" path={mdiGithub} title="GitHub"/></a>
                <a href="https://github.com/JuanPabloDV" target='blank'><Icon className="card-icon" path={mdiLinkedin} title="Linkedin"/></a>
                <a href="mailto: juangodoi.pablo@hotmail.com"><Icon className="card-icon" path={mdiEmail} title="Email"/></a>
                <a href="https://wa.me/5547997511327" target='blank'><Icon className="card-icon" path={mdiWhatsapp} title="WhatsApp"/></a>
            </div>
        </section>
    )
}

export default Contact