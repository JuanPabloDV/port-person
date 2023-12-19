import React, { useState } from "react";
import './style.css';

export default function Header() {
    const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
      {'<'}JPG/{'>'}
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            Sobre
          </a>
        </li>
        <li className="nav__item">
          <a href="#skills" className="nav__link">
            Tecnologias
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">
            Projetos
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contato
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
    // return (
    //     <header>
    //         <h1 className="logo-title"><a href="#">{'<'}JPG/{'>'}</a></h1>
    //         <ul>
    //             <li><a href="#">Inicio</a></li>
    //             <li><a href="#about">Sobre</a></li>
    //             <li><a href="#skills">Tecnologias</a></li>
    //             <li><a href="#projects">Projetos</a></li>
    //             <li><a href="#contact">Contato</a></li>
    //         </ul>
    //     </header>
    // )
}