import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { FullNav } from '.';

export default {
  title: 'Navigation/FullNav',
  component: FullNav,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof FullNav>;

export const Primary = (args) => <FullNav {...args} />;

Primary.storyName = 'FullNav';

Primary.args = {
  logo: 'TestCo',
  items: [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false }
  ]
};
