import type { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
import { within } from "@testing-library/react";
import { expect } from "@storybook/jest";
import userEvent from "@testing-library/user-event";

const meta = {
    title: "Form",
    component: Form
} as Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};

export const Testing: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');
        await expect(input).toHaveTextContent("");

        // jestの時とは違いsetup()でuserインスタンスを作成する必要はない
        await userEvent.type(input, "play function");
        await expect(canvas.getByDisplayValue('play function')).toBeInTheDocument();
    }
};

