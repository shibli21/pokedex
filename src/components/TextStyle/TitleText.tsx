import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const TitleText = (props: TextProps) => {
  return (
    <Text fontWeight="semibold" fontSize={["lg", "xl"]} mb={4} {...props} />
  );
};

export default TitleText;
