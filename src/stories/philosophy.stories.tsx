import type { Meta, StoryObj } from "@storybook/react";
import PhilosophyComponent from "../components/philosophy/philosophy";

const meta: Meta<typeof PhilosophyComponent> = {
  title: "Components/Philosophy",
  component: PhilosophyComponent,
};

export default meta;
type Story = StoryObj<typeof PhilosophyComponent>;

export const Philosophy: Story = {
  args: {},
};
