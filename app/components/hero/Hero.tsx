import Image from "next/image";
import { FC } from "react";

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, FilButton } from "../buttons/Button";

import style from "./Hero.module.scss";

const Hero: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={style.hero}>
      <Image src={"/Memoji-round.svg"} alt="avatar" width={100} height={100} />
      <h2 className="drop-shadow-md">Hello, I'm Dmytro 🤙</h2>
      <h1 className="drop-shadow-sm">
        I am junior{" "}
        <span className="text-light-blue font-semibold drop-shadow-lg">
          front-end developer
        </span>
        , I am engaged in UI development, I like to learn something new
      </h1>
      <div className="flex gap-4">
        <FilButton onClick={onOpen}>Contact</FilButton>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius={"3xl"} w={"fit-content"}>
            <Image
              src={"/telegram-contact.jpeg"}
              alt="telegram: @DmytroMusiichenko"
              width={1000}
              height={1000}
              className="rounded-3xl self-center w-auto h-auto"
            />
          </ModalContent>
        </Modal>
        <Button>
          <a
            href="/cv/CV Junior front-end — Dmytro Musiichenko.pdf"
            download
            className="max-md:text-sm"
          >
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
