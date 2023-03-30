import type { Project } from "@/pages/api/projects";
import { FC, useEffect, useState } from "react";
import SkillBadge from "../skill-badge/SkillBadge";
import style from "./Project.module.scss";

const Project: FC<{ data: Project }> = ({ data }) => {
  return (
    <div className={style.project}>
      <h3 className="text-3xl">{data.name}</h3>
      <div className="flex gap-[10px] overflow-x-auto">
        {data.stack.map((skill) => (
          <SkillBadge data={skill} />
        ))}
      </div>
      <div className="min-h-[270px] bg-gray-900 rounded-3xl"></div>
    </div>
  );
};

export default Project;
