import { StackOfProject } from "@/pages/api/projects";
import { clsx } from "clsx";
import { FC } from "react";

interface ISkillBadge {
  data: StackOfProject;
}

const SkillBadge: FC<ISkillBadge> = ({ data }) => {
  const { color, name } = data;

  return (
    <div
      className={clsx(
        {
          "bg-emerald": color === "emerald",
          "bg-light-blue": color === "light-blue",
          "bg-yellow": color === "yellow",
          "bg-rose": color === "rose",
          "bg-gray-900": color === "black",
        },
        "px-4 py-2 rounded-full text-white whitespace-nowrap text-sm min-w-fit"
      )}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
