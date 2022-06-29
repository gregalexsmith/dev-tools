import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { NavFull } from '.';

export default {
  title: 'Navigation/NavFull',
  component: NavFull,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof NavFull>;

export const Primary = (args) => <NavFull {...args} />;

Primary.storyName = 'NavFull';

Primary.args = {
  logo: 'TestCo',
  items: [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false }
  ]
};
