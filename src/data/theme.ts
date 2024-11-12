import type { TailwindColor } from "./types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "emerald",  // General color for primary elements
    blur: {
      top: "green",       // Blurred top effect for a secure, admin-like feel
      bottom: "blue",     // Blurred bottom for a reliable tech-oriented theme
    },
  },
};

export default theme;
