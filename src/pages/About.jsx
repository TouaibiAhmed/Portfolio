import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiPieChart } from 'react-icons/fi';

const skills = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Development',
    description: 'Expertise in building scalable web applications using modern technologies like React, Node.js, and Python.',
  },
  {
    icon: <FiLayout />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications using React Native and Flutter.',
  },
  {
    icon: <FiPieChart />,
    title: 'AI & Data Science',
    description: 'Implementing machine learning solutions and data analysis for business intelligence.',
  },
];

const timeline = [
  {
    year: '2023',
    title: 'Senior Full-Stack Developer',
    company: 'SW Consulting',
    description: 'Led the development of enterprise-level applications and mentored junior developers.',
  },
  {
    year: '2023',
    title: 'UI/UX Designer & Developer',
    company: 'SW Consulting',
    description: 'Designed and implemented user interfaces for various web and mobile applications.',
  },
  {
    year: '2022',
    title: 'Junior Developer',
    company: 'ALFA Computing',
    description: 'Started my journey in web development, working on frontend and backend projects.',
  },
];

const About = () => {
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
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate developer with expertise in creating innovative digital solutions
            and delivering exceptional user experiences.
          </p>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-4xl text-primary mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-primary font-semibold mb-2">{item.year}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="text-gray-600 dark:text-gray-300 mb-3">{item.company}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 