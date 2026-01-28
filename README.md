# Professional Portfolio Website

A modern, responsive portfolio website built with React.js, featuring smooth animations, dark mode, and a beautiful UI design.

## Features

- 🎨 Modern and creative design with glassmorphism effects
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions using Framer Motion
- 🎯 Interactive project showcase with filtering
- 📝 Contact form with EmailJS integration
- 🎮 3D background elements using Three.js
- 🎨 Custom gradient animations
- 📊 Animated skill progress bars
- 📱 Mobile-first approach

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- EmailJS
- React Router
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/TouaibiAhmed/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Customization

1. Update personal information in the respective components
2. Replace project images in the `public/projects` directory
3. Modify colors in `src/index.css` and `tailwind.config.js`
4. Update social media links in the Contact component
5. Add your own projects in the Projects component

## Project Structure

```
portfolio/
├── public/
│   └── projects/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Loader.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Resume.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
