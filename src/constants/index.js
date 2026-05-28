const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Conceptos", imgPath: "/images/concepts.svg" },
  { text: "Diseños", imgPath: "/images/designs.svg" },
  { text: "Codigo", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Conceptos", imgPath: "/images/concepts.svg" },
  { text: "Diseños", imgPath: "/images/designs.svg" },
  { text: "Codigo", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Satisfied Clients" },
  { value: 3, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Enfoque en Calidad",
    desc: "Entrego resultados de alto nivel cuidando cada detalle del producto final.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Comunicación Constante",
    desc: "Te mantengo informado en cada etapa del proyecto para garantizar transparencia y claridad.",
  },
  {
    imgPath: "/images/time.png",
    title: "Entrega Puntual",
    desc: "Me aseguro de cumplir los plazos acordados sin sacrificar la calidad ni la atención al detalle.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Contribuí en la implementación de una herramienta SIEM open source para fortalecer la gestión de incidentes de ciberseguridad en la infraestructura del COCIBER.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/cociber.png",
    title: "Pasante — Comando de Ciberdefensa del Ecuador",
    date: "2024",
    responsibilities: [
      "Gestioné servidor y nodos sobre sistema operativo Linux en la infraestructura del COCIBER.",
      "Implementé la herramienta SIEM open source Wazuh para la mejora de la gestión de incidentes de seguridad.",
      "Desarrollé el manual técnico y documentación de uso de la herramienta para el equipo.",
    ],
  },
  {
    review: "Desarrollé el backend de una aplicación de transporte tipo InDrive, integrando pagos en línea y comunicación en tiempo real con tecnologías modernas.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/kaizen-logo.svg",
    title: "Pasante — Kaizen Software",
    date: "2024",
    responsibilities: [
      "Desarrollé el backend de una aplicación de transporte tipo InDrive con arquitectura REST.",
      "Integré pasarelas de pago con Stripe para la gestión de transacciones en línea.",
      "Implementé un chat en tiempo real mediante WebSockets para la comunicación entre conductor y pasajero.",
    ],
  },
];

const expLogos = [
  {
    name: "Comando de Ciberdefensa del Ecuador",
    imgPath: "/images/logos/cociber.png",
  },
  {
    name: "Kaizen Software",
    imgPath: "/images/logos/kaizen-logo.svg",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const techSkills = [
  {
    name: 'JavaScript',
    level: 20,
    color: '#F7DF1E',
    label: 'En Progreso',
    icon: 'JS',
    desc: 'ES6+, DOM, asincronía y lógica de aplicación',
  },
  {
    name: 'React',
    level: 40,
    color: '#61DAFB',
    label: 'En Progreso',
    icon: 'Re',
    desc: 'Componentes, hooks, estado y SPA',
  },
  {
    name: 'Python',
    level: 60,
    color: '#3776AB',
    label: 'En Progreso',
    icon: 'Py',
    desc: 'Scripting, estructuras de datos y algoritmos',
  },
  {
    name: 'Java',
    level: 60,
    color: '#ED8B00',
    label: 'En Progreso',
    icon: 'Ja',
    desc: 'POO, colecciones y patrones de diseño',
  },
  {
    name: 'Angular',
    level: 10,
    color: '#DD0031',
    label: 'En Progreso',
    icon: 'Ng',
    desc: 'Framework frontend, TypeScript y servicios',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  techSkills,
};
