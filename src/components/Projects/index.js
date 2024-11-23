import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './style.css';
import ScrollReveal from 'scrollreveal';
import Modal from 'react-modal';
import apiImage from '../../img/api-image.svg';
import calcImage from '../../img/calc-imc.jpg';
import hambImage from '../../img/hamburger.png';
import strangerImage from '../../img/stranger.png';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

Modal.setAppElement('#root');

const TechBadge = ({ techName, color }) => {
  return (
    <span
      style={{
        color: color,
        border: `1px solid ${color}`,
        padding: '4px 8px',
        borderRadius: '15px',
        fontWeight: 'bold',
        fontSize: '11px',
        textTransform: 'uppercase',
        marginRight: '8px',
        marginBottom: '3px',
        marginTop: '3px',
      }}
    >
      {techName}
    </span>
  );
};

const ProjectCard = ({ project, onOpenModal }) => (
  <SplideSlide>
    <div className="card-project">
      <img src={project.image} alt={`Imagem do projeto ${project.title}`} />
      <h5>{project.title}</h5>
      <span>{project.description}</span>
      <div className="card-tecnologic-wrapper">
        {project.techIcons.map((tech, i) => (
          <TechBadge key={i} techName={tech.name} color={tech.color} />
        ))}
      </div>
      <button onClick={() => onOpenModal(project)}>Ver Detalhes</button>
    </div>
  </SplideSlide>
);

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Calculadora IMC',
      description: 'Calculadora desenvolvida em React, com intuito de melhorar e praticar habilidades em React.',
      fullDescription: 'Este projeto é uma calculadora de Índice de Massa Corporal (IMC) desenvolvida com React, onde você pode calcular seu IMC com base em sua altura e peso, podendo usar o valor para avaliar sua saúde física. Foi criado com o intuito de melhorar minhas habilidades em React e também praticar a implementação de lógica de cálculos em JavaScript.',
      techIcons: [
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'React', color: '#61DAFB' },
        { name: 'Vite', color: '#646CFF' },
      ],
      image: calcImage,
      link: 'https://imc-calcdv.vercel.app',
      github: 'https://github.com/JuanPabloDV/imc-calc',
    },
    {
      title: 'Api de Filmes',
      description: 'Desenvolvida para aprender a criação de APIs conectadas com banco de dados.',
      fullDescription: 'Este projeto é uma API de filmes, onde você pode buscar filmes e obter detalhes sobre eles. Foi desenvolvido utilizando Node.js e MongoDB para armazenar os dados dos filmes e suas informações relacionadas.',
      techIcons: [
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'Node.js', color: '#68A063' },
        { name: 'MongoDB', color: '#47A248' },
      ],
      image: apiImage,
      github: 'https://github.com/JuanPabloDV/starwars-api',
    },
    {
      title: 'Site de Hambúrgueres',
      description: 'Projeto em Vue 3 para gerenciar pedidos de hambúrguer com JSON Server.',
      fullDescription: 'Este projeto foi feito para aprender mais sobre Vue.js, focando no consumo de APIs e criação de formulários. Ele permite realizar operações CRUD (criar, ler, editar e excluir) utilizando json-server como banco de dados. O site está disponível online, mas para testar todas as funcionalidades, é necessário baixar o projeto do GitHub e rodar a API localmente.',
      techIcons: [
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'Vue.js', color: '#4FC08D' },
        { name: 'JSON Server', color: '#006400' },
      ],
      image: hambImage,
      link: 'https://hamburger-project-rust.vercel.app',
      github: 'https://github.com/JuanPabloDV/hamburger-project',
    },
    {
      title: 'Stranger Things',
      description: 'O site de Stranger Things foi desenvolvido com foco na melhoria de práticas e na utilização do React.',
      fullDescription: 'Um site inspirado em Stranger Things, criado para melhorar as práticas de design e o uso do React. O projeto não possui funcionalidades complexas, sendo focado no aprendizado de componentes e na aplicação de conceitos fundamentais do React.',
      techIcons: [
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'React', color: '#61DAFB' },
        { name: 'Vite', color: '#646CFF' },
      ],
      image: strangerImage,
      link: 'https://stranger-things-eight.vercel.app',
      github: 'https://github.com/JuanPabloDV/stranger-things',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    ScrollReveal().reveal('.projects', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 30,
      reset: true,
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="title">Projetos</h2>
      <Splide
        aria-label="Meus Projetos"
        options={{
          rewind: true,
          width: 1200,
          gap: '1rem',
          perPage: 4,
          arrows: false,
          pagination: false,
          breakpoints: {
            500: { perPage: 1 },
            768: { perPage: 2 },
            900: { perPage: 3 },
            1200: { perPage: 2, width: '100%' },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onOpenModal={openModal} />
        ))}
      </Splide>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Projeto"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        {selectedProject && (
          <>
            <button className="close-button" onClick={closeModal}>
                <Icon path={mdiClose} size={1} color="#333" />
            </button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.fullDescription}</p>
            {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noreferrer">Ver Projeto</a>}
            {selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noreferrer">Ver Código no GitHub</a>}
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
