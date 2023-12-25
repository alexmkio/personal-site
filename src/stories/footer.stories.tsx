import type { Meta, StoryObj } from "@storybook/react";
import FooterComponent from "../components/footer/footer";

const meta: Meta<typeof FooterComponent> = {
  title: "Components/Footer",
  component: FooterComponent,
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {
  args: {},
};
