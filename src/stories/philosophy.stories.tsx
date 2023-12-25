import type { Meta, StoryObj } from "@storybook/react";
import Philosophy from "../components/philosophy/philosophy";

const meta: Meta<typeof Philosophy> = {
  title: "Components/Philosophy",
  component: Philosophy,
};

export default meta;
type Story = StoryObj<typeof Philosophy>;

export const Default: Story = {
  args: {},
};
