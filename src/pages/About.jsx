import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiPieChart } from 'react-icons/fi';

const skills = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Development',
    description: 'Building responsive web platforms with modern frontend architecture and scalable backend workflows.',
  },
  {
    icon: <FiLayout />,
    title: 'UI/UX Design',
    description: 'Designing interfaces that prioritize clarity, usability, accessibility, and a strong visual identity.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile Development',
    description: 'Creating mobile-first experiences for users with elegant flows, real-time features, and performance in mind.',
  },
  {
    icon: <FiPieChart />,
    title: 'AI & Data Science',
    description: 'Developing data-driven ML systems, forecasting tools, and intelligent dashboards for practical business value.',
  },
];

const timeline = [
  {
    year: '2024 - 2027',
    title: 'National Engineering Diploma',
    company: 'TEKUP University',
    description: 'Focused on data science, artificial intelligence, and machine learning in a highly applied environment.',
  },
  {
    year: '2021 - 2024',
    title: 'Bachelor of Computer Science',
    company: 'ISET Mahdia',
    description: 'Built foundations in software engineering, web technologies, and problem-solving.',
  },
  {
    year: '2022 - Present',
    title: 'Independent Product Builder',
    company: 'Portfolio & Projects',
    description: 'Designed and developed end-to-end products across AI, web, and mobile domains with a focus on quality and user value.',
  },
];

const About = () => {
  return (
    <div className="page-shell">
      <div className="inner-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="eyebrow">About me</span>
          <h1>Building technology with purpose.</h1>
          <p>
            I’m a multidisciplinary developer who enjoys turning ideas into usable digital experiences,
            whether that means crafting a full-stack application, designing a clean mobile interface,
            or developing an AI model that adds real business insight.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-grid"
        >
          <div className="glass-panel about-card">
            <h2>What I bring</h2>
            <p>
              My work blends technical depth with product thinking. I care about writing maintainable code,
              designing elegant interfaces, and building features that are useful, scalable, and easy to trust.
            </p>
            <ul>
              <li>End-to-end product thinking from concept to deployment</li>
              <li>Strong emphasis on clean UI/UX and responsive design</li>
              <li>Comfortable across frontend, backend, mobile, and AI workflows</li>
            </ul>
          </div>

          <div className="glass-panel about-card">
            <h2>Core focus</h2>
            <div className="focus-list">
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>FastAPI</span>
              <span>Machine Learning</span>
              <span>React Native</span>
              <span>Figma</span>
              <span>Data Analysis</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="skills-section-wrap"
        >
          <h2 className="section-title">Areas of expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel skill-card"
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="timeline-wrap"
        >
          <h2 className="section-title">Education & journey</h2>
          <div className="timeline-grid">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel timeline-card"
              >
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;