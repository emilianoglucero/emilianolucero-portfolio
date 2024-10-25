const projectsInfo = [
  {
    id: 15,
    href: "https://blog.emilianolucero.info/",
    filename: "blog-tech.png",
    title: "I 🖤 my computer job",
    description:
      "A dynamic platform showcasing original writings, technical explorations, curated photography collections, handcrafted playlists, and more.",
    tag1: "Next.js",
    tag2: "GSAP",
    tag3: "Typescript",
  },
  {
    id: 14,
    href: "https://bebeto-pizza.vercel.app/nuncasepuedehacermasrapido.html",
    filename: "nuncasepuedehacermasrapido.png",
    title: "Nunca se puede hacer más rápido",
    description:
      "An interactive project using React Three Fiber, GSAP animations, and custom shaders to showcase a printed zine I released in 2018. This digital experience merges motion graphics and 3D rendering to bring the zine's content to life in a dynamic, immersive way.",
    tag1: "React Three Fiber",
    tag2: "GSAP",
    tag3: "Shaders",
  },
  {
    id: 13,
    href: "https://cutie-romero.vercel.app",
    filename: "cuti.jpg",
    title: "Cutie Romero",
    description:
      "A Three.js experience that explores the interaction between Twitter fandom and professional football players featuring interactive elements, animations, physics and shaders.",
    tag1: "Three.js",
    tag2: "Javascript",
    tag3: "GSAP",
  },
  {
    id: 12,
    href: "https://www.instagram.com/p/CnPnO8dgXFE/",
    filename: "prato.png",
    title: "Archivo Prato",
    description:
      "This interactive installation was developed in collaboration with my friend Virginia Molinari, utilizing her extensive photography archive. Built with JavaScript and Pixi.js, it incorporates shaders for visual effects and motion detection via a Kinect device. The project was exhibited at the Complejo Astronómico in Rosario, Argentina.",
    tag1: "Javascript",
    tag2: "Pixi.js",
    tag3: "Kinectron",
  },
  {
    id: 11,
    href: "https://github.com/emilianoglucero/emilianolucero-portfolio",
    filename: "portfolio.png",
    title: "Personal Portfolio Website",
    description:
      "A landing page for my portfolio (this site), built using React, Gatsby, and styled with TailwindCSS. This project serves as both a personal showcase and a playground to experiment with modern web development tools and best practices.",
    tag1: "React",
    tag2: "TailwindCSS",
    tag3: "Gatsby",
  },
  // {
  //   id: 13,
  //   href: "https://github.com/emilianoglucero/giphy-api-example",
  //   filename: "giphy.jpg",
  //   title: "Giphy searcher",
  //   description:
  //     "A super super super simple gif searcher powered by Giphy. An excuse to do some Unit Testing.",
  //   tag1: "React",
  //   tag2: "UnitTesting",
  //   tag3: "Javascript",
  // },
  {
    id: 10,
    href: "https://github.com/emilianoglucero/twitter-bot",
    filename: "twitter.jpg",
    title: "Twitter Bot",
    description:
      "A Twitter bot with a melancholic personality, developed using JavaScript, Node.js, and Express. This bot generates and posts sad or introspective tweets, exploring the emotional range of automated social media interactions.",
    tag1: "Node.js",
    tag2: "Javascript",
    tag3: "Express",
  },
  // {
  //   id: 11,
  //   href: "https://www.alphatrainingcenter.com.ar/",
  //   filename: "alpha.jpg",
  //   title: "Alpha Training Center Dojo",
  //   description: "Landing page made for the Alpha Training Center Dojo.",
  //   tag1: "React",
  //   tag2: "Gatsby",
  //   tag3: "Sass",
  // },
  {
    id: 9,
    href: "https://bebeto-pizza.vercel.app/compraventa.html",
    filename: "compraventa.jpg",
    title: "Compraventa",
    description:
      "A project that reveals the inner dynamics of a Telegram group, offering an observational lens into the interactions and exchanges within this digital marketplace.",
    tag1: "NetArt",
    tag2: "React",
    tag3: "",
  },
  {
    id: 8,
    href: "https://ateitiscorp.com/",
    filename: "ateitis.jpg",
    title: "Ateitis Corp",
    description:
      "This project was developed in collaboration with my friend Alexis Boni. It features a landing page and ecommerce functionality built with React and Gatsby, using WordPress as the CMS and WooCommerce for the ecommerce platform.",
    tag1: "React",
    tag2: "GraphQL",
    tag3: "Wordpress",
  },
  {
    id: 7,
    href:
      "https://chrome.google.com/webstore/detail/me-encanta-todo-eso/lelgaanomejijmiolbncggicogpalmcb",
    filename: "chrome.jpg",
    title: "Me encanta todo eso",
    description:
      "A Google Chrome plugin that transforms the Facebook Desktop UI by altering the HTML and CSS to automatically inflate each post's like count into a large number of 'Love' reactions. This playful extension critiques social media engagement metrics.",
    tag1: "Javascript",
    tag2: "ChromePlugin",
    tag3: "",
  },
  {
    id: 6,
    href: "https://bebeto-pizza.vercel.app/screenshots.html",
    filename: "screenshots.png",
    title: "Screenshots",
    description:
      "A 3D experience developed with Three.js to showcase a printed zine I created in 2019. This project merges digital and physical media, offering an interactive way to explore the zine's content in a virtual environment.",
    tag1: "Three.js",
    tag2: "",
    tag3: "",
  },
  {
    id: 5,
    href: "https://bebeto-pizza.vercel.app/dibuja.html",
    filename: "colorea.png",
    title: "Colorea un empresario",
    description:
      "An interactive project inviting users to color illustrations of the richest Argentine businessmen. This playful yet thought-provoking piece encourages reflection on the figures shaping Argentina’s economy, blending art with social commentary.",
    tag1: "p5.js",
    tag2: "Node.js",
    tag3: "Google Cloud Storage",
  },
  {
    id: 4,
    href: "https://bebeto-pizza.vercel.app/maradona.html",
    filename: "diego.jpg",
    title: "Para el pueblo lo mejor",
    description:
      "An experimental and visually striking tribute to Diego Armando Maradona. 💕.",
    tag1: "Javascript",
    tag2: "p5.js",
    tag3: "",
  },
  {
    id: 3,
    href: "https://bebeto-pizza.vercel.app/zarandraca.html",
    filename: "zarandraca.png",
    title: "El viaje de zarandraca",
    description:
      "A video game project dedicated to a close friend. Built with p5.js and Phaser.io, and inspired by the mechanics of Flappy Bird, it combines playful interactivity with a personal narrative, offering a nostalgic yet innovative gaming experience.",
    tag1: "Javascript",
    tag2: "Node.js",
    tag3: "p5.js",
  },
  // {
  //   id: 3,
  //   href:
  //     "https://play.google.com/store/apps/details?id=com.lse.ar.rosario.art&hl=es&gl=US",
  //   filename: "art.jpg",
  //   title: "Asociación Rosarina de Tenis App",
  //   description:
  //     "Mobile Hybrid App for The Asociación Rosarina de Tenis made with Apache Cordova.",
  //   tag1: "Javascript",
  //   tag2: "ApacheCordova",
  //   tag3: "Framework7",
  // },
  {
    id: 2,
    href: "https://www.instagram.com/ar/532471514229195/",
    filename: "instagram.jpg",
    title: "Bebeto Face Filter",
    description:
      "An Instagram face filter created using Spark AR Studio for a music project. This filter enhances user engagement by blending artistic design with augmented reality, offering an interactive and visually compelling experience directly on social media.",
    tag1: "Spark",
    tag2: "Instagram",
    tag3: "",
  },
  {
    id: 1,
    href: "https://bebeto-pizza.vercel.app/voca.html",
    filename: "boca.jpg",
    title: "Abrí la voki",
    description:
      "A Net Art project blending randomness with interactive technology, utilizing p5.js to access the camera and incorporate facial recognition models. The piece pushes the boundaries of user interaction and digital identity, dynamically transforming the viewer's face into part of the artwork in real time.",
    tag1: "NetArt",
    tag2: "Javascript",
    tag3: "p5.js",
  },
]

export default projectsInfo
