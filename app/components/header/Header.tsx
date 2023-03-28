import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";
import { FiMenu } from "react-icons/fi";

const Header: FC = () => {
  return (
    <div className="inline-block self-end">
      <Menu>
        <MenuButton
          as={Button}
          bg={"transparent"}
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent" }}
        >
          <Icon as={FiMenu} boxSize={"10"} />
        </MenuButton>
        <MenuList borderRadius={"3xl"} overflow={"hidden"}>
          <MenuItem
            as={"a"}
            href="#projects"
            color="#F59E0B"
            className="flex justify-center font-medium"
          >
            Projects
          </MenuItem>
          <MenuItem
            as={"a"}
            href="#about"
            color="#38BDF8"
            className="flex justify-center font-medium"
          >
            About me
          </MenuItem>
          <MenuItem
            as={"a"}
            href="#contacts"
            color="#34D399"
            className="flex justify-center font-medium"
          >
            Contacts
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Header;
