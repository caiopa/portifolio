import ecommerceImg from "../imagens/ecommerce.png";
import deliveryImg from "../imagens/projeto-delivery.png";
import receitasImg from "../imagens/projeto-receitas.jpg";
import musicImg from "../imagens/music-icon.png";
import githubImg from "../imagens/GitHub2.jpg";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "CPA Store",
    description: "Loja de e-commerce",
    technologies: [
      "Reactjs",
      "Nextjs",
      "NextAuth",
      "Typescript",
      "Tailwindcss",
      "CSS",
      "Context",
      "Stripe",
      "Nodejs",
      "Prisma",
      "Supabase",
    ],
    image: ecommerceImg,
    githubLink: "https://github.com/caiopa/AppFullStack",
  },
  {
    title: "Delivery",
    description:
      "Página de cadastro e controle de vendas e entrega de uma delivery",
    technologies: ["Reactjs", "Nodejs", "Context", "Express", "MySQL"],
    image: deliveryImg,
    githubLink: "https://github.com/caiopa/AppDelivery",
  },
  {
    title: "Receitas",
    description: "Página de receitas, objetivo de consumir duas APIs externas.",
    technologies: ["Reactjs", "JS", "CSS", "Context"],
    image: receitasImg,
    githubLink: "https://github.com/caiopa/AppReceitas",
  },
  {
    title: "BeatMusic",
    description:
      "Página de pesquisa de música com o objetivo de acessar uma API externa do iTunes, favoritar as músicas",
    technologies: ["Reactjs", "JS", "React Router", "Tailwindcss"],
    image: musicImg,
    githubLink: "https://github.com/caiopa",
  },
  {
    title: "Git Hub",
    description: "Outros projetos podem ser encontrados no meu GitHub",
    technologies: [
      "Reactjs",
      "Node JS",
      "CSS",
      "Context",
      "Redux",
      "MySQL",
      "NoSQL",
      "Python",
      "Jest",
      "Typescript",
    ],
    image: githubImg,
    githubLink: "https://github.com/caiopa",
  },
];
