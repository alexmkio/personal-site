import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../components/slider/slider";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {},
};
