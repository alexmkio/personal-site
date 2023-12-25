import type { Meta, StoryObj } from "@storybook/react";
import HeaderComponent from "../components/header/header";

const meta: Meta<typeof HeaderComponent> = {
  title: "Components/Header",
  component: HeaderComponent,
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
  args: {},
};
