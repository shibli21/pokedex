import { Stack, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    pt="1rem"
    css={{
      ":first-of-type": {
        marginTop: "30px",
      },
      ":last-of-type": {
        marginBottom: "100px",
      },
    }}
    {...props}
  />
);
