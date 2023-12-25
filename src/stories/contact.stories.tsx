import type { Meta, StoryObj } from "@storybook/react";
import ContactComponent from "../components/contact/contact";

const meta: Meta<typeof ContactComponent> = {
  title: "Components/Contact",
  component: ContactComponent,
};

export default meta;
type Story = StoryObj<typeof ContactComponent>;

export const Contact: Story = {
  args: {},
};
