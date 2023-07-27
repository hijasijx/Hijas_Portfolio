import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  Talrop,
  shopie,
  netflix,
  blog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "SOFTWARE ENGINEER(Intern)",
    company_name: "Talrop",
    icon: Talrop,
    iconBg: "#fff",
    date: "August 2022",
    points: [
      "I have completed a one-year software engineer course at Talrop",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked on the development of React Native applications, ensuring cross-platform compatibility and smooth performance.",
    ],
  },
];

const projects = [
  {
    name: "Netflix-Clone",
    description:
      "Welcome to our captivating Netflix-clone built with React, offering an immersive streaming experience just like the original. Enjoy a vast collection of movies and shows sourced from our demo API, delivering a seamless and entertaining platform for your viewing pleasure.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/",
  },
  {
    name: "SHOPIE.",
    description:
      "Discover a seamless shopping experience on our cutting-edge React-powered e-commerce website. With secure payments handled through Stripe, rest assured that your transactions are safe and hassle-free. Plus, powered by Strapi, we ensure your data is stored securely and efficiently, giving you peace of mind while you shop.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: shopie,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blog",
    description:
      "Welcome to our interactive blog platform powered by Python Django and crafted with React. Seamlessly post and edit your own blogs, and immerse yourself in a world of diverse content by exploring and reading captivating posts from other users. Join our community of passionate writers and readers, and let your voice be heard in this dynamic and engaging space.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/hijasijx/netflix",
  },
];

export { services, technologies, experiences, projects };
