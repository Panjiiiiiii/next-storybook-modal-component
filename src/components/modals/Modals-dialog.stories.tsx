import type { Meta, StoryObj } from "@storybook/react";
import { ModalDialog, ModalDialogProps } from "./Modals-dialog";
import React from "react";

export default {
  title: "Molecule/modals-dialog",
  component: ModalDialog,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ModalDialog>;

export const Default: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;

Default.args = {
  variant: "success",
  modalButton: "click here",
  title: "This is Modal Title",
  text: "Lorem ipsum dolor sir amet consectetur. Arcu vel orci eget pharetra nec",
};

export const success: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;

success.args = {
  ...Default.args,
  variant: "success",
};

export const warning: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;

warning.args = {
  ...Default.args,
  variant: "warning",
};

export const danger: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;

danger.args = {
  ...Default.args,
  variant: "danger",
};

export const info: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;

info.args = {
  ...Default.args,
  variant: "info",
};
