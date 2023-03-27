import Image from "next/image";
import { FC } from "react";

import { Button, FilButton } from "../buttons/Button";

import style from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <div className={style.hero}>
      <Image src={"/Memoji-round.svg"} alt="avatar" width={100} height={100} />
      <h2>Hello, I'm Dmytro 🤙</h2>
      <h1>
        I am junior{" "}
        <span className="text-light-blue font-semibold">
          front-end developer
        </span>
        , I am engaged in UI development, I like to learn something new
      </h1>
      <div className="flex gap-4">
        <FilButton>
          <a href="">Contact</a>
        </FilButton>
        <Button>Download CV</Button>
      </div>
    </div>
  );
};

export default Hero;
