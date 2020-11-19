import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
  bg: string;
  max: number;
  value: number;
}

function ProgressBar({ bg, max, value }: Props): ReactElement {
  return (
    <Box w="100%" height="7px" bg="gray.100">
      <Box height="7px" bg={bg} w={`${(value * 100) / max}%`}></Box>
    </Box>
  );
}

export default ProgressBar;
