import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaSteam,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string] : IconType } = {
    pc: FaWindows ,
    playstation: FaPlaystation ,
    xbox: FaXbox,
    nintendo: SiNintendoswitch ,
    ios: MdPhoneIphone ,
    mac: FaApple ,
    android: FaAndroid ,
    linux: FaLinux ,
    web: BsGlobe ,
    steam: FaSteam ,
  };
  return (
    <>
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500'>{platform.name}</Icon>
      ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
