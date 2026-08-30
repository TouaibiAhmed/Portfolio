import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const AnimatedSphere = () => (
  <Sphere args={[1, 100, 200]} scale={3.5}>
    <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.16} />
  </Sphere>
);

const stats = [
  { label: 'Projects shipped', value: '15+' },
  { label: 'AI & ML builds', value: '6' },
  { label: 'Mobile apps', value: '3' },
];

const Home = () => {
  return (
    <div className="page-shell hero-page">
      <div className="hero-background">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 1, 1]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      <div className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-copy"
        >
          <span className="eyebrow">AI Engineer • Full-Stack Developer • UI/UX Designer</span>
          <h1>
            I build <span className="text-gradient">smart digital products</span>
            <br />that solve real problems.
          </h1>
          <p>
            I’m Ahmed Touaibi, a developer focused on machine learning, intelligent interfaces,
            and full-stack experiences that are clean, modern, and useful.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="primary-button">
              View my work
              <FiArrowRight />
            </Link>
            <a href="/Touaibi_ahmed_cv.pdf" className="secondary-button" download>
              <FiDownload />
              Resume
            </a>
          </div>

          <div className="social-row">
            <motion.a href="https://github.com/TouaibiAhmed" target="_blank" rel="noreferrer" whileHover={{ scale: 1.08 }}>
              <FiGithub />
            </motion.a>
            <motion.a href="https://linkedin.com/in/touaibi-ahmed-ab928423a" target="_blank" rel="noreferrer" whileHover={{ scale: 1.08 }}>
              <FiLinkedin />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-visual"
        >
          <div className="glass-panel hero-card">
            <div className="mini-badge">Available for opportunities</div>
            <h2>Portfolio Snapshot</h2>
            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="skill-pills">
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>TensorFlow</span>
              <span>FastAPI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;