import type { Meta, StoryObj } from "@storybook/react";
import SelectedWorksComponent from "../components/selected-works/selected-works";

const meta: Meta<typeof SelectedWorksComponent> = {
  title: "Components/Selected Works",
  component: SelectedWorksComponent,
};

export default meta;
type Story = StoryObj<typeof SelectedWorksComponent>;

export const SelectedWorks: Story = {
  args: {},
};
