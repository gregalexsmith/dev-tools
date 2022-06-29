import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { NavSimple } from '.';

export default {
  title: 'Navigation/NavSimple',
  component: NavSimple,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof NavSimple>;

export const Primary = (args) => (
  <MemoryRouter>
    <div className="w-96 mx-auto">
      <NavSimple {...args}>
        <NavSimple.Link to="/">Home</NavSimple.Link>
        <NavSimple.Link to="/about">About</NavSimple.Link>
      </NavSimple>
    </div>
  </MemoryRouter>
);

Primary.storyName = 'NavSimple';

Primary.args = {
  title: 'TestCo'
};
