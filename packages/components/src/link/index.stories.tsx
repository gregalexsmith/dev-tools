import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from '.';

export default {
  title: 'Link',
  component: Link
};

export const External = (args) => <Link {...args}>Test external link</Link>;
External.args = {
  href: '/test'
};

export const Internal = (args) => (
  <MemoryRouter>
    <Link {...args}>Test external link</Link>
  </MemoryRouter>
);
Internal.args = {
  to: '/test'
};
