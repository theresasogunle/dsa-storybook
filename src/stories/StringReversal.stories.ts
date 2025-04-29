import type { Meta, StoryObj } from "@storybook/react";

import { StringReversal } from "../components/StringReversal";

const meta = {
  title: "TwoPointers/StringReversal",
  component: StringReversal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof StringReversal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReverseString: Story = {
  args: {
    inputString: "HELLO",
    hasControls: false
  },
};


export const ReverseStringControls: Story = {
  args: {
    inputString: "ALGORITHM",
    hasControls: true
  },
};
