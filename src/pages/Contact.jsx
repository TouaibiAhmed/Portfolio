import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    icon: <FiGithub />,
    label: 'GitHub',
    url: 'https://github.com/TouaibiAhmed',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/touaibi-ahmed-ab928423a',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to discuss a project? Feel free to reach out - I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-form-container"
            >
              <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary-light">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <FiUser />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <FiMail />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <FiMessageSquare />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-input"
                      placeholder="Your message"
                    />
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="submit-button"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </motion.button>
                
                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="contact-info-container"
            >
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary-light">
                    Contact Information
                  </h2>
                  <div className="contact-method">
                    <div className="contact-icon">
                      <FiMail />
                    </div>
                    <div>
                      <h3 className="contact-method-title">Email</h3>
                      <a
                        href="mailto:touaibiahmed67@gmail.com"
                        className="contact-method-value"
                      >
                        touaibiahmed67@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary-light">
                    Social Profiles
                  </h2>
                  <div className="social-links">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="social-link"
                      >
                        <div className="social-icon">
                          {link.icon}
                        </div>
                        <span>{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;