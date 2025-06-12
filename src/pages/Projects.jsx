import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'MediPro-Connect',
    category: 'web', 
    image: '/projects/medipro.png',
    description: 'A comprehensive web solution and mobile application designed to streamline patient appointment scheduling and enhance doctor schedule management efficiently.',
    technologies: ['  MERN Stack  ', '  React Native  ', '   Redux  ', '  Face++API  '],
    github: 'https://github.com/TouaibiAhmed/MediProConnect-Frontend',
    images: [
      '/projects/medipro-1.png',
      '/projects/medipro-2.png',
      '/projects/medipro-3.png',
      '/projects/medipro-4.png',
            '/projects/medipro-5.jpg',
      '/projects/medipro-6.png',
      '/projects/medipro-7.png',
      '/projects/medipro-8.png',
      '/projects/medipro-9.jpg',


    ]
   
  },
  {
    id: 2,
    title: 'My Coiffure',
    category: 'mobile',
    image: '/projects/mycoiff.png',
    description: 'A mobile application that streamlines beauty salon bookings with real-time appointment scheduling, service management, and customer profiles.',
    technologies: ['   React Native  ', '   Node.js  ', '  Mongodb   ', '   Redux   '],
    github: 'https://github.com/TouaibiAhmed/My-Coiffure-Mobile-app-Backend',
    images: [
      '/projects/coiffure-2.jpg',
      '/projects/coiffure-3.jpg',
      '/projects/coiffure-5.jpg',
        '/projects/coiffure-6.jpg',
          '/projects/coiffure-7.jpg',
    ]
  },
  {
    id: 3,
    title: 'Free Choice',
    category: 'web',
    image: '/projects/freechoice.png',
    description: 'An interactive Quiz Game with 3D graphics, responsive UI, state management using Zustand, and smooth animations powered by Framer Motion.',
    technologies: ['  React  ', '  Zustand  ', '  Framer Motion  ', '  Cannon.js  '],
    github: 'https://github.com/TouaibiAhmed/Free-choise_quizz_game',
    live: 'https://free-choice-quiz.com',
    images: [
      '/projects/quiz-1.png',
      '/projects/quiz-2.png',
      '/projects/quiz-3.png',
      '/projects/quiz-4.png',

    ]
  },
  {
    id: 4,
    title: 'FoodHut JEE',
    category: 'web',
    image: '',
    description: 'A Java Enterprise Edition (JEE) web application for restaurant reservations implementing MVC architecture with servlets and controllers.',
    technologies: ['  Java EE  ', '  Eclipse  ', '  MVC Pattern  ', '  Servlets  '],
    github: 'https://github.com/TouaibiAhmed/FoodHut',
    live: '',
    images: [
      '/projects/food-1.png',
      '/projects/food-2.png',
      '/projects/food-3.png',
      '/projects/food-4.png',
    ]
  },
  {
    id: 5,
    title: 'Nurse Care',
    category: 'design',
    image: '/projects/nurse.png',
    description: 'Mobile app UI/UX design for nurses to manage patients with intuitive interfaces and efficient workflow.',
    technologies: ['  Figma  ', '  UI/UX Design  ', '  Prototyping  '],
    github: '',
    live: '',
    images: [
      '/projects/nurse-1.png',
      '/projects/nurse-2.png',
      '/projects/nurse-3.png',
            '/projects/nurse-4.png',
      '/projects/nurse-5.png',
      '/projects/nurse-6.png',
      '/projects/nurse-7.png',

            '/projects/nurse-8.png',


    ]
  },
  {
    id: 6,
    title: 'AWS Chatbot',
    category: 'ai',
    image: '',
    description: 'A chatbot for answering questions about AWS certifications, providing accurate information and study resources.',
    technologies: ['  Python  ', '  Gemini API  ', '   AstraDB  ', '    Gradio    '],
    github: 'https://github.com/TouaibiAhmed/Pdf_chatbot',
    live: '',
    images: [
      '/projects/chatbot-1.png',
      '/projects/chatbot-2.png',
    
    ]
  },
  {
    id: 7,
    title: 'Bio4Seasons',
    category: 'web',
    image: '/projects/bio.png',
    description: 'An intuitive and efficient online platform for selling fresh products, connecting consumers with quality fruits and vegetables while supporting local producers.',
    technologies: ['  MERN STACK  ', 'Figma', '  REDUX  '],
    github: 'https://github.com/TouaibiAhmed/Bio4Seasons-Frontend',
    live: '',
    images: [
      '/projects/bio-1.png',
      '/projects/bio-2.png',
      '/projects/bio-3.png',
            '/projects/bio-4.png',
      '/projects/bio-5.png',
      '/projects/bio-6.png',
 

    ]
  },
  {
    id: 8,
    title: 'Luxury Cars Rental',
    category: 'web',
    image: '/projects/cars.png',
    description: 'Frontend web application for luxury cars reservation with elegant design and seamless user experience.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Responsive Web'],
    github: 'https://github.com/TouaibiAhmed/Luxury-Cars-Rental',
    live: '',
    images: [
      '/projects/car-4.png',
      '/projects/car-5.png',
      '/projects/car-1.png',
            '/projects/car-2.png',
      '/projects/car-3.png',

    ]
  }
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
  const [selectedImage, setSelectedImage] = useState(null); 

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and personal projects. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >

<div className="image-container">
  <img src={project.image} alt={project.title} className="project-image" />
</div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {project.period && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {project.period} {project.role && `• ${project.role}`}
                    </p>
                  )}
                  <div className="mb-3">
                    <span className="text-sm font-medium text-primary">Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>



{/* Inside the project card, after the technologies section */}
<div className="mt-4">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={(e) => {
      e.stopPropagation();
      setSelectedProject(project);
    }}
    className="w-full px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors"
  >
    Click to see details ↓
  </motion.button>
</div>


                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass max-w-4xl w-full rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-image-container">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className=" modal-image w-full h-48 object-contain bg-gray-100 dark:bg-gray-800"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  {selectedProject.period && (
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      {selectedProject.period} {selectedProject.role && `• ${selectedProject.role}`}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
         {/* Replace the current screenshots section with this */}
<div className="mb-8">
  <h3 className="text-lg font-semibold mb-3 text-primary">Screenshots</h3>
  <div className="horizontal-gallery">
    {selectedProject.images.map((image, index) => (
      <div 
        key={index} 
        className="gallery-item"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedImage(image);
        }}
      >
        <img
          src={image}
          alt={`${selectedProject.title} screenshot ${index + 1}`}
          className="gallery-image"
        />
      </div>
    ))}
  </div>
</div>
                  
                  <div className="flex justify-end space-x-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      View Code
                    </motion.a>
                    {selectedProject.live && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                      >
                        <FiExternalLink className="mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}


{/* Image Popup Modal */}
<AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="image-popup-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      onClick={() => setSelectedImage(null)}
    >
      <div className="image-popup-content relative max-w-[90vw] max-h-[90vh]">
        
        <motion.img
          src={selectedImage}
          alt="Enlarged project screenshot"
          className="image-popup-img max-w-full max-h-[80vh] object-contain"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        />
      </div>
    </motion.div>
  )}
</AnimatePresence>

        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;