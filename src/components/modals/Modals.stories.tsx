import type { Meta, StoryObj } from "@storybook/react";
import {Modals, modalProps } from "./Modals";
import React from "react";

export default {
  title: "Molecule/modals",
  component: Modals,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Modals>;

export const Default: StoryObj<modalProps> = (
  args: React.JSX.IntrinsicAttributes & modalProps
) => <Modals {...args} />;

Default.args = {
  size: "medium",
  modalButton: "click here",
  title: "Modal Title",
  text: "Lorem ipsum dolor sir amet consectetur. Arcu vel orci eget pharetra nec",
  secondButton: "Secondary",
  primaryButton: "Primary Action",
};

export const small: StoryObj<modalProps> = (
  args: React.JSX.IntrinsicAttributes & modalProps
) => (
  <Modals {...args}/>
);

small.args = {
  ...Default.args,
  size: "small"
};

export const medium: StoryObj<modalProps> = (
  args: React.JSX.IntrinsicAttributes & modalProps
) => (
  <Modals {...args}/>
);

medium.args = {
  ...Default.args,
  size: "medium"
};

export const large: StoryObj<modalProps> = (
  args: React.JSX.IntrinsicAttributes & modalProps
) => (
  <Modals {...args}/>
);

large.args = {
  ...Default.args,
  size: "large"
};

export const WithText: StoryObj<modalProps> = (
  args: React.JSX.IntrinsicAttributes & modalProps
) => (
  <Modals {...args}>
    <div>
      <span>Show card component with text</span>
    </div>
  </Modals>
);

WithText.args = {
  ...Default.args,
};