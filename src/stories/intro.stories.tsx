import type { Meta, StoryObj } from "@storybook/react";
import Intro from "../components/intro/intro";

const meta: Meta<typeof Intro> = {
  title: "Components/Intro",
  component: Intro,
};

export default meta;
type Story = StoryObj<typeof Intro>;

export const Default: Story = {
  args: {},
};
