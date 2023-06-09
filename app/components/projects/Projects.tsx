import { RootProjects } from "@/pages/api/projects";
import { FC, useEffect, useState } from "react";
import Project from "../project/Project";
import style from "./Projects.module.scss";

const Projects: FC = () => {
  const [data, setData] = useState<null | RootProjects>(null);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <section className={style.projects} id="projects">
      <h2>Last Projects</h2>
      <div>
        {data?.data.map((project) => (
          <Project data={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
