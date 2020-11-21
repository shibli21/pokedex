import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const SecondaryText = (props: TextProps) => {
  return <Text color="gray.500" {...props} fontSize={["md", "md", "lg"]} />;
};

export default SecondaryText;
