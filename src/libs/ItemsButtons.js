import Project from "../pages/project.astro";

export const itemsButton = [
  {
    name: "Inicio",
    link: "/miguelgomez",
  },
  {
    name: "Proyecto",
    link: "/miguelgomez/project",
  },
  {
    name: "Equipo",
    link: "/miguelgomez/team",
  },
  {
    name: "Contacto",
    link: "/miguelgomez/contact",
  },
];

export const ProjectNav = [
  ...itemsButton,
  {
    name: "De que va ❓",
    link: "#whatis",
  },
  {
    name: "Que encontramos ❓",
    link: "#whatifind"
  },
  
  {
    name: "Community 💘",
    link: "#community"
  }
];

const myrepoName= "/repo"
