import type { Preview } from "@storybook/react";
import { initializeRTL } from "storybook-addon-rtl";
import "../src/styles/index.scss";

initializeRTL();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Components",
          [
            "Header",
            "Intro",
            "About",
            "Philosophy",
            "Selected Works",
            "Carousel",
            "Contact",
            "Footer",
          ],
          "Page",
        ],
      },
    },
  },
};

export default preview;
