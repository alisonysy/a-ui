import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { PRIMARY_STORY, Title, Primary, Stories, ArgsTable } from '@storybook/addon-docs/blocks';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    }
  }
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
