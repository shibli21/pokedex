import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const BoldText = (props: TextProps) => {
  return <Text color="gray.800" fontWeight={500} {...props} />;
};

export default BoldText;
