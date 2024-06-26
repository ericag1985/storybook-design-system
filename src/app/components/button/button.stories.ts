import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { ButtonVariants } from "./types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: Object.values(ButtonVariants),
    },
    children: {
      control: "text",
      description: "Inner text and/or icon content of the button.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled.",
    },
  },
  args: {
    variant: ButtonVariants.Filled,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Filled: Story = {
  args: {
    children: "Button",
    disabled: false,
  },
};
