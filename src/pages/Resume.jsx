import { motion } from 'framer-motion';
import { FiDownload, FiCode, FiDatabase, FiLayout, FiSmartphone } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend Development',
    icon: <FiCode />,
    items: [
      'ReactJs',
      'Angular',
      
    ],
  },
  {
    category: 'Backend Development',
    icon: <FiDatabase />,
    items: [
      'NodeJs',
      'Springboot',
      'NestJs',
    ],
  },
  {
    category: 'UI/UX Design',
    icon: <FiLayout />,
    items: [
      'Figma',
      'Adobe XD',
      'Photoshop',
      'Illustrator',
    ],
  },
  {
    category: 'Mobile Development',
    icon: <FiSmartphone />,
    items: [
      'React Native',
      'Flutter',
      'Android Development',
    ],
  },
];

const education = [
  {
    degree: ' National Engineering Diploma ',
    school: 'TEKUP University',
    year: '2024 - 2027',
    description: 'Specialized in Data Science , Artificial Intelligence and Machine Learning',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'ISET Mahdia',
    year: '2021 - 2024',
    description: 'Focused on Software and Web Development',
  },
];

const Resume = () => {
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
            Resume
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional experience and educational background
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <motion.a
            href="/cvv.pdf"
            download="Ahmed-Touaibi-CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cv inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-4xl text-primary mb-4">{skillGroup.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-primary font-semibold">{edu.year}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 