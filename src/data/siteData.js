import About from "../components/pages/About";
import Skills from "../components/pages/Skills";
import Portfolio from "../components/pages/portfolio/Portfolio";
import Contact from "../components/pages/Contact";

const navLink = [
    {
      id: 1,
      page: "about",
      title: 'about me',
      to: "/about",
      "component" : About,
      theme: 'coral',
    },
    {
      id: 2,
      page: "skills",
      title: 'my skills',
      to: "/skills",
      "component" : Skills,
      theme: 'sky',
    },
    {
      id: 3,
      page: "portfolio",
      title: 'my portfolio',
      to: "/portfolio",
      "component" : Portfolio,
      theme: 'mint',
    },
    {
      id: 4,
      page: "contact",
      title: 'get in touch',
      to: "/contact",
      "component" : Contact,
      theme: 'violet',
    },
  ];

  export default navLink