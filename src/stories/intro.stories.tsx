import type { Meta, StoryObj } from "@storybook/react";
import IntroComponent from "../components/intro/intro";

const meta: Meta<typeof IntroComponent> = {
  title: "Components/Intro",
  component: IntroComponent,
};

export default meta;
type Story = StoryObj<typeof IntroComponent>;

export const Intro: Story = {
  args: {},
};
