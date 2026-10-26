import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'MediPro-Connect',
    category: 'web',
    thumbnail: 'MediPro',
    image: '/projects/medipro.png',
    description: 'A full healthcare platform that helps patients book appointments and lets doctors manage schedules with a more structured digital experience.',
    technologies: ['MERN Stack', 'React Native', 'Redux', 'Face++ API'],
    github: 'https://github.com/TouaibiAhmed/MediProConnect-Frontend',
    live: '',
    images: ['/projects/medipro-1.png', '/projects/medipro-2.png', '/projects/medipro-3.png'],
  },
  {
    id: 2,
    title: 'My Coiffure',
    category: 'mobile',
    thumbnail: 'Coiffure',
    image: '/projects/mycoiff.png',
    description: 'A beauty salon booking app focused on service discovery, scheduling, customer profiles, and a smooth appointment experience.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Redux'],
    github: 'https://github.com/TouaibiAhmed/My-Coiffure-Mobile-app-Backend',
    live: '',
    images: ['/projects/coiffure-2.jpg', '/projects/coiffure-3.jpg', '/projects/coiffure-5.jpg'],
  },
  {
    id: 3,
    title: 'Free Choice',
    category: 'web',
    thumbnail: 'Quiz',
    image: '/projects/freechoice.png',
    description: 'An interactive quiz game with cinematic effects, responsive layout, and a playful experience for user engagement.',
    technologies: ['React', 'Zustand', 'Framer Motion', 'Cannon.js'],
    github: 'https://github.com/TouaibiAhmed/Free-choise_quizz_game',
    live: 'https://free-choice-quiz.com',
    images: ['/projects/quiz-1.png', '/projects/quiz-2.png', '/projects/quiz-3.png'],
  },
  {
    id: 4,
    title: 'FoodHut JEE',
    category: 'web',
    thumbnail: 'FoodHut',
    image: '',
    description: 'A Java EE restaurant reservation system built around MVC architecture for table management and ordering workflows.',
    technologies: ['Java EE', 'Eclipse', 'Servlets', 'MVC Pattern'],
    github: 'https://github.com/TouaibiAhmed/FoodHut',
    live: '',
    images: ['/projects/food-1.png', '/projects/food-2.png', '/projects/food-3.png'],
  },
  {
    id: 5,
    title: 'Nurse Care',
    category: 'design',
    thumbnail: 'Nurse',
    image: '/projects/nurse.png',
    description: 'A healthcare-focused UX prototype for nurses to manage patient information and workflows in a structured and friendly interface.',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    github: '',
    live: '',
    images: ['/projects/nurse-1.png', '/projects/nurse-2.png', '/projects/nurse-3.png'],
  },
  {
    id: 6,
    title: 'AWS Chatbot',
    category: 'ai',
    thumbnail: 'AWS',
    image: '',
    description: 'A chatbot designed to answer AWS certification questions and present study resources in an accessible, conversational way.',
    technologies: ['Python', 'Gemini API', 'AstraDB', 'Gradio'],
    github: 'https://github.com/TouaibiAhmed/Pdf_chatbot',
    live: '',
    images: ['/projects/chatbot-1.png', '/projects/chatbot-2.png'],
  },
  {
    id: 7,
    title: 'Bio4Seasons',
    category: 'web',
    thumbnail: 'Bio',
    image: '/projects/bio.png',
    description: 'A fresh-produce e-commerce app that connects local agricultural products to end users with an easy shopping flow.',
    technologies: ['MERN Stack', 'Redux', 'Figma'],
    github: 'https://github.com/TouaibiAhmed/Bio4Seasons-Frontend',
    live: '',
    images: ['/projects/bio-1.png', '/projects/bio-2.png', '/projects/bio-3.png'],
  },
  {
    id: 8,
    title: 'Luxury Cars Rental',
    category: 'web',
    thumbnail: 'Cars',
    image: '/projects/cars.png',
    description: 'A luxury car booking website built for premium reservations with a refined and responsive user experience.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Responsive Web'],
    github: 'https://github.com/TouaibiAhmed/Luxury-Cars-Rental',
    live: '',
    images: ['/projects/car-1.png', '/projects/car-2.png', '/projects/car-3.png'],
  },
  {
    id: 9,
    title: 'AI Impact Prediction System',
    category: 'ai',
    thumbnail: 'AI Impact',
    image: '/projects/AI_IP.png',
    description: 'A machine learning system for evaluating how AI may affect different job roles by analyzing role types, industries, and task patterns.',
    technologies: ['Django', 'Streamlit', 'Jupyter', 'Python'],
    github: 'https://github.com/TouaibiAhmed/AI-Impact-Prediction',
    live: '',
    images: ['/projects/AI impact1.png', '/projects/AI impact2.png'],
  },
  {
    id: 10,
    title: 'Rideshare',
    category: 'web',
    thumbnail: 'Ride',
    image: '/projects/rideshare.png',
    description: 'A ride-sharing platform designed to connect drivers and passengers in a modern, full-stack application experience.',
    technologies: ['Django', 'React', 'Postgres'],
    github: 'https://github.com/TouaibiAhmed/Ride-Share',
    live: '',
    images: ['/projects/rideshare1.png', '/projects/rideshare2.png', '/projects/rideshare3.png'],
  },
  {
    id: 11,
    title: 'AIOps Project',
    category: 'ai',
    thumbnail: 'AIOps',
    image: '',
    description: 'An end-to-end AIOps platform for infrastructure monitoring, anomaly detection, and incident classification using Prometheus, Docker, FastAPI, and machine learning models.',
    technologies: ['Python', 'FastAPI', 'Docker', 'Prometheus', 'Grafana', 'Isolation Forest', 'Random Forest'],
    github: 'hhttps://github.com/TouaibiAhmed/AIOps-System',
    live: '',
    images: [],
  },
  {
    id: 12,
    title: 'Data Storytelling AI',
    category: 'ai',
    thumbnail: 'Story AI',
    image: '',
    description: 'An AI-powered storytelling dashboard that transforms uploaded datasets into business reports, insights, recommendations, and interactive visual narratives.',
    technologies: ['React', 'Vite', 'FastAPI', 'LangChain', 'Python', 'Plotly'],
    github: 'https://github.com/TouaibiAhmed/Data-Storytelling-AI',
    live: '',
    images: [],
  },
  {
    id: 13,
    title: 'House Rental',
    category: 'mobile',
    thumbnail: 'Rental',
    image: '',
    description: 'A mobile property rental app built to help users browse listings, explore homes, filter options, and manage rental decisions in a convenient experience.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Maps', 'Navigation'],
    github: 'https://github.com/TouaibiAhmed/house-rental-mobile-app',
    live: '',
    images: [],
  },
  {
    id: 14,
    title: 'RenYou Chatbot',
    category: 'ai',
    thumbnail: 'RenYou',
    image: '',
    description: 'A local recommendation chatbot that helps users discover and understand products through an Ollama-powered conversational interface and catalog search.',
    technologies: ['Python', 'FastAPI', 'Ollama', 'Scraper', 'Product Catalog'],
    github: 'https://github.com/TouaibiAhmed/Renyou-chatbot',
    live: '',
    images: [],
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'design', label: 'UI/UX Design' },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="page-shell">
      <div className="inner-section projects-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="eyebrow">Selected work</span>
          <h1>Projects with impact.</h1>
          <p>
            I build products that combine technical execution, design clarity, and business value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="filter-bar"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`filter-pill ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="glass-panel project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`project-image-wrap ${!project.image ? 'placeholder' : ''}`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-placeholder">{project.thumbnail}</div>
                )}
              </div>

              <div className="project-content">
                <div className="project-meta-row">
                  <span className="project-tag">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="project-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  See details
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="glass-panel project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="modal-close" onClick={() => setSelectedProject(null)}>
                <FiX />
              </button>

              <div className={`project-modal-cover ${!selectedProject.image ? 'placeholder' : ''}`}>
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} />
                ) : (
                  <div>{selectedProject.thumbnail}</div>
                )}
              </div>

              <div className="project-modal-body">
                <span className="project-tag">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>

                <div className="tech-stack large">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                {selectedProject.images.length > 0 && (
                  <div className="modal-gallery">
                    <h3>Project previews</h3>
                    <div className="gallery-row">
                      {selectedProject.images.map((image, index) => (
                        <img key={index} src={image} alt={`${selectedProject.title} preview ${index + 1}`} />
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-actions">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="primary-button small">
                      <FiGithub />
                      View code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="secondary-button small">
                      <FiExternalLink />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;