import type { Meta, StoryObj } from "@storybook/react";
import AboutComponent from "../components/about/about";

const meta: Meta<typeof AboutComponent> = {
  title: "Components/About",
  component: AboutComponent,
};

export default meta;
type Story = StoryObj<typeof AboutComponent>;

export const About: Story = {
  args: {},
};
