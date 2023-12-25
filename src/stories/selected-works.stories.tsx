import type { Meta, StoryObj } from "@storybook/react";
import SelectedWorks from "../components/selected-works/selected-works";

const meta: Meta<typeof SelectedWorks> = {
  title: "Components/Selected Works",
  component: SelectedWorks,
};

export default meta;
type Story = StoryObj<typeof SelectedWorks>;

export const Default: Story = {
  args: {},
};
