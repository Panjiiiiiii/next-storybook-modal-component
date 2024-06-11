import type { Meta, StoryObj } from "@storybook/react";
import {Modals, modalProps } from "./Modals";
import React from "react";

//default ini buat init di storybook
export default {
  title: "Molecule/modals", //title buat nampung direktori storybook
  component: Modals, //component yang dipakai apa
  argTypes: {}, //args diisi optional soalnya kepake juga di default
  tags: ["autodocs"], //autodocs buat agar element nya langsung ke dokumentasi di storybook
} satisfies Meta<typeof Modals>;

//args ini dipakai buat nilai default element yang kita buat
export const Default: StoryObj<modalProps> = (
  args: React.JSX.IntrinsicAttributes & modalProps
) => <Modals {...args} />;

//argumen default
Default.args = {
  size: "medium",
  modalButton: "click here",
  title: "Modal Title",
  text: "Lorem ipsum dolor sir amet consectetur. Arcu vel orci eget pharetra nec",
  secondButton: "Secondary",
  primaryButton: "Primary Action",
};

//args yang bisa dicustom di storybook
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