import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    normal: {
      light: "#b3b5b2",
      medium: "#a0a29f",
    },
    fire: {
      light: "#F4934D",
      medium: "#F08030",
    },
    fighting: {
      light: "#EB4971",
      medium: "#d3425f",
    },
    water: {
      light: "#75b1e5",
      medium: "#539ddf",
    },
    flying: {
      light: "#B8A5F2",
      medium: "#A890F0",
    },
    grass: {
      light: "#7fca79",
      medium: "#5fbd58",
    },
    poison: {
      light: "#c582d9",
      medium: "#b763cf",
    },
    electric: {
      light: "#F9DF78",
      medium: "#F8D030",
    },
    ground: {
      light: "#F78551",
      medium: "#DE7748",
    },
    psychic: {
      light: "#fb9d9a",
      medium: "#fa8581",
    },
    rock: {
      light: "#d4c9a1",
      medium: "#c9bb8a",
    },
    ice: {
      light: "#91d9cd",
      medium: "#75d0c1",
    },
    bug: {
      light: "#B5C534",
      medium: "#A8B820",
    },
    dragon: {
      light: "#8656FA",
      medium: "#7038F8",
    },
    ghost: {
      light: "#7f8ac9",
      medium: "#5f6dbc",
    },
    dark: {
      light: "#7a7981",
      medium: "#595761",
    },
    steel: {
      light: "#78aab5",
      medium: "#5695a3",
    },
    fairy: {
      light: "#f1a6eb",
      medium: "#ee90e6",
    },
  },
  styles: {
    global: (props) => ({
      "html, body": {
        fontFamily: "poppins",
        color: props.colorMode === "dark" ? "white" : "gray.800",
        bg: props.colorMode === "dark" ? "gray.800" : "white",
      },
    }),
  },
});

export default theme;
