import type { Project } from "@/pages/api/projects";

import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { BiGlobe } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";

import SkillBadge from "../skill-badge/SkillBadge";

import style from "./Project.module.scss";

const Project: FC<{ data: Project }> = ({ data }) => {
  return (
    <div className={style.project}>
      <h3
        className="text-3xl whitespace-nowrap overflow-hidden overflow-ellipsis"
        title={data.name}
      >
        {data.name}
      </h3>
      <div className="flex gap-[10px] overflow-x-auto">
        {data.stack.map((skill) => (
          <SkillBadge data={skill} key={skill.name} />
        ))}
      </div>
      <div className="flex justify-center items-center text-white px-4 text-3xl font-medium   min-h-[270px] bg-gray-900 rounded-3xl">
        {data.image ? (
          <Image
            src={data.image}
            alt="project preview"
            width={1000}
            height={1000}
          />
        ) : (
          "coming soon..."
        )}
      </div>
      <div className="flex gap-5 ml-4 font-medium">
        {data.git && (
          <a href={data.git} target="_blank" title="Github">
            Github {<Icon as={VscGithubInverted} />}
          </a>
        )}
        {data.deploy && (
          <a href={data.deploy} target="_blank" title="Deploy">
            Deploy {<Icon as={BiGlobe} />}
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
