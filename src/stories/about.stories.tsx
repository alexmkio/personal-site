import type { Meta, StoryObj } from "@storybook/react";
import About from "../components/about/about";

const meta: Meta<typeof About> = {
  title: "Components/About",
  component: About,
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {
  args: {},
};
