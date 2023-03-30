import { RootProjects } from "@/pages/api/projects";
import { FC, useEffect, useState } from "react";
import Project from "../project/Project";
import style from "./Projects.module.scss";

const Projects: FC = () => {
  const [data, setData] = useState<null | RootProjects>(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/projects")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <section className={style.projects} id="projects">
      <h2>Last Projects</h2>
      <div>
        {data?.data.map((project) => (
          <Project data={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
