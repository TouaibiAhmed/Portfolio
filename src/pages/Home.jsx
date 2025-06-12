import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin   } from 'react-icons/fi';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={3.5}>
      <meshStandardMaterial
        color="#2563eb"
        wireframe
        transparent
        opacity={0.2}
      />
    </Sphere>
  );
};

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 1, 1]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-gradient block mb-4">Full-Stack Developer</span>
              <span className="text-4xl md:text-6xl block">  -   UI/UX Designer</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Crafting beautiful, functional, and innovative digital experiences
            </p>
            <div className="icons flex justify-center space-x-24 mb-20">
              <motion.a
                href="https://github.com/TouaibiAhmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-6xl hover:text-primary transition-colors" 
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/touaibi-ahmed-ab928423a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-6xl hover:text-primary transition-colors"
              >
                <FiLinkedin />
              </motion.a>
              
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 