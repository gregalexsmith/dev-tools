import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { FullNavigation } from '.';

export default {
  title: 'Navigation/FullNavigation',
  component: FullNavigation,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof FullNavigation>;

export const Primary = (args) => <FullNavigation {...args} />;

Primary.storyName = 'FullNavigation';

Primary.args = {
  logo: 'TestCo',
  items: [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false }
  ]
};
