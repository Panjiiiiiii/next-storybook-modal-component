import { Card, CardProps } from './card';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select' },
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

// With named export we define component's story
export const Default: StoryObj<CardProps> = (args: React.JSX.IntrinsicAttributes & CardProps) => <Card {...args} />;
// Define default arguments for the Default StoryObj
Default.args = {
  variant: 'elevation',
  classes: 'w-64 h-64',
  label:'test'
};

// Second StoryObj
export const WithText: StoryObj<CardProps> = (args: React.JSX.IntrinsicAttributes & CardProps) => (
  <Card {...args}>
    <div>
      <span>Story that shows Card component with text</span>
    </div>
  </Card>
);
// Define default arguments for the WithText component and inherit arguments from Default component
WithText.args = {
  ...Default.args,
  classes: 'w-64 h-64 text-xl bg-green-600'
};

