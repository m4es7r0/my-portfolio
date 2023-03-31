import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from "@chakra-ui/react";

import Image from "next/image";

import { FC } from "react";

import { FiMenu } from "react-icons/fi";

const Header: FC = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <div className="flex justify-between items-center">
      <div className="px-4 flex gap-3 items-center">
        <svg
          width="18"
          height="34"
          viewBox="0 0 18 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.71236 26.7051C3.58653 26.7051 2.63761 26.3352 1.86561 25.5954C1.12578 24.8556 0.755859 23.9066 0.755859 22.7486C0.755859 21.5906 1.12578 20.6578 1.86561 19.9501C2.63761 19.2103 3.58653 18.8404 4.71236 18.8404C5.83819 18.8404 6.77103 19.2103 7.51086 19.9501C8.28286 20.69 8.66886 21.6228 8.66886 22.7486C8.66886 23.9066 8.28286 24.8556 7.51086 25.5954C6.77103 26.3352 5.83819 26.7051 4.71236 26.7051Z"
            fill="#FFC36A"
          />
          <path
            d="M13.7428 33.9631V0.0361328H17.0646V33.9631H13.7428Z"
            fill="#FFC36A"
          />
        </svg>
        <span className="font-medium">Musiichenko</span>
      </div>
      <Menu>
        <MenuButton
          as={IconButton}
          bg={"transparent"}
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent" }}
        >
          <Icon as={FiMenu} boxSize={`${isLargerThan768 ? 10 : 8}`} />
        </MenuButton>
        <MenuList borderRadius={"3xl"} overflow={"hidden"}>
          <MenuItem
            as={"a"}
            href="#projects"
            color="#F59E0B"
            className="flex justify-center font-medium max-md:text-sm"
          >
            Projects
          </MenuItem>
          <MenuItem
            as={"a"}
            href="#about"
            color="#38BDF8"
            className="flex justify-center font-medium max-md:text-sm"
          >
            About me
          </MenuItem>
          <MenuItem
            as={"a"}
            href="#contacts"
            color="#34D399"
            className="flex justify-center font-medium max-md:text-sm"
          >
            Contacts
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Header;
