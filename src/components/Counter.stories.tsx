import { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta = {
    title: "Counter",
    component: Counter,
} as Meta<typeof Counter>

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
    args: {}
};