// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface RootProjects {
  data: Project[];
}

export interface Project {
  name: string;
  image?: string;
  git: string;
  deploy?: string;
  stack: StackOfProject[];
}

export interface StackOfProject {
  name: string;
  color: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RootProjects>
) {
  res.status(200).json({
    data: [
      {
        name: "E-commerce",
        git: "https://github.com/m4es7r0/coffee-e-commerce",
        stack: [
          {
            name: "Next",
            color: "rose",
          },
          {
            name: "Redux",
            color: "black",
          },
          {
            name: "TS",
            color: "light-blue",
          },
          {
            name: "Chakra UI",
            color: "emerald",
          },
        ],
      },
      {
        name: "Tiny Blog",
        image: "/projects/blog.png",
        git: "https://github.com/m4es7r0/full-stack-react-experss-blog",
        deploy:
          "https://full-stack-react-experss-blog-git-front-end-m4es7r0.vercel.app/",
        stack: [
          {
            name: "React",
            color: "light-blue",
          },
          {
            name: "Rest API",
            color: "emerald",
          },
          {
            name: "Redux",
            color: "black",
          },
          {
            name: "Node JS",
            color: "yellow",
          },
          {
            name: "Material UI",
            color: "emerald",
          },
          {
            name: "Sass",
            color: "rose",
          },
        ],
      },
      {
        name: "Marvel information Resource",
        image: "/projects/marvel.png",
        git: "https://github.com/m4es7r0/marvel-react",
        deploy: "https://marvel-react-sigma.vercel.app/",
        stack: [
          {
            name: "React",
            color: "light-blue",
          },
          {
            name: "Remote API",
            color: "rose",
          },
          {
            name: "Redux",
            color: "black",
          },
          {
            name: "CSS",
            color: "light-blue",
          },
        ],
      },
    ],
  });
}
