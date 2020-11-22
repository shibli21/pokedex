import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { CgEditShadows } from "react-icons/cg";
import { FaRegCircle } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import {
  BugIcon,
  DarkIcon,
  DragonIcon,
  ElectricIcon,
  FairyIcon,
  FightingIcon,
  FireIcon,
  FlyingIcon,
  GhostIcon,
  GrassIcon,
  GroundIcon,
  IceIcon,
  NormalIcon,
  PhysicIcon,
  PoisonIcon,
  RockIcon,
  SteelIcon,
  WaterIcon,
} from "../theme/Icons/icons";
interface Props {
  type: string;
  noName?: boolean;
}

const PokemonTypeBadge = ({ type, noName }: Props) => {
  let icon: any;

  switch (type) {
    case "normal":
      icon = <NormalIcon />;
      break;
    case "fighting":
      icon = <FightingIcon />;
      break;
    case "flying":
      icon = <FlyingIcon />;
      break;
    case "poison":
      icon = <PoisonIcon />;
      break;
    case "ground":
      icon = <GroundIcon />;
      break;
    case "rock":
      icon = <RockIcon />;
      break;
    case "bug":
      icon = <BugIcon />;
      break;
    case "ghost":
      icon = <GhostIcon />;
      break;
    case "steel":
      icon = <SteelIcon />;
      break;
    case "fire":
      icon = <FireIcon />;
      break;
    case "water":
      icon = <WaterIcon />;
      break;
    case "grass":
      icon = <GrassIcon />;
      break;
    case "electric":
      icon = <ElectricIcon />;
      break;
    case "psychic":
      icon = <PhysicIcon />;
      break;
    case "ice":
      icon = <IceIcon />;
      break;
    case "dragon":
      icon = <DragonIcon />;
      break;
    case "dark":
      icon = <DarkIcon />;
      break;
    case "fairy":
      icon = <FairyIcon />;
      break;
    case "unknown":
      icon = <Box as={GrStatusUnknown} />;
      break;
    case "shadow":
      icon = <Box as={CgEditShadows} />;
      break;

    default:
      icon = <Box as={FaRegCircle} />;
      break;
  }

  return (
    <Box
      mt={2}
      display="inline-block"
      px={1}
      py={0.5}
      fontWeight="normal"
      fontSize={["15px", "20px", "20px"]}
      textTransform="capitalize"
      mr={2}
      bg={`${type}.medium`}
      color="white"
      borderRadius={4}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
    >
      <HStack spacing={1}>
        <Box>{icon}</Box>
        {noName ? null : (
          <Text mr={1} fontSize={["xs", "sm", "lg"]}>
            {type}
          </Text>
        )}
      </HStack>
    </Box>
  );
};

export default PokemonTypeBadge;
