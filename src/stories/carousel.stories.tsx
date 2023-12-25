import type { Meta, StoryObj } from "@storybook/react";
import CarouselComponent from "../components/slider/slider";

const meta: Meta<typeof CarouselComponent> = {
  title: "Components/Carousel",
  component: CarouselComponent,
};

export default meta;
type Story = StoryObj<typeof CarouselComponent>;

export const Carousel: Story = {
  args: {},
};
