import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {},
      sizes: {
        xl: {
        },
      },
      variants: {
        solid: (props) => ({}),
        transparent: {
          backgroundColor: "transparent",
          borderBottom: "2px solid black",
          borderRadius: "0px",
          padding: "4px",
        },
        onlyIcon: {
          backgroundColor: "transparent",
          height: "30px",
        },
      },
    },
  },
});

export default theme;
