import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { SimpleNav } from '.';

export default {
  title: 'Navigation/SimpleNav',
  component: SimpleNav,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SimpleNav>;

export const Primary = (args) => (
  <MemoryRouter>
    <div className="w-96 mx-auto">
      <SimpleNav {...args}>
        <SimpleNav.NavLink to="/" content="Home" />
        <SimpleNav.NavLink to="/about" content="About" />
      </SimpleNav>
    </div>
  </MemoryRouter>
);

Primary.storyName = 'SimpleNav';

Primary.args = {
  logo: 'TestCo',
  items: [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false }
  ]
};
