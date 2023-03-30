// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface RootProjects {
  data: Project[];
}

export interface Project {
  name: string;
  image?: string;
  git: string;
  deploy: string;
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
        image: "/",
        git: "...",
        deploy: "...",
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
            name: "JS",
            color: "yellow",
          },
          {
            name: "HTML",
            color: "rose",
          },
        ],
      },
      {
        name: "E-commerce",
        git: "...",
        deploy: "...",
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
            name: "JS",
            color: "yellow",
          },
          {
            name: "HTML",
            color: "rose",
          },
        ],
      },
      {
        name: "E-commerce",
        git: "...",
        deploy: "...",
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
            name: "JS",
            color: "yellow",
          },
          {
            name: "HTML",
            color: "rose",
          },
        ],
      },
    ],
  });
}
