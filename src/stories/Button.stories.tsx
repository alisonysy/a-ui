import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps, BaseButton } from './Button';
import { Stories } from "@storybook/addon-docs/blocks";
export default {
  title: 'Example/Button',
  component: Button,
  subcomponents: { BaseButton },
  argTypes: {
    // 这在docs中会生成一个color picker
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const BaseTemp: Story<ButtonProps> = (args) => <BaseButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Base = BaseTemp.bind({});
Base.args = {
  label: 'required label'
}
Base.parameters = {
  docs: {
    page: () => <Stories includePrimary />,
    source: {
      code: 'some code'
    },
    description: {
      story: 'one description'
    }
  }
}