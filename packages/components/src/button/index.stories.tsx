import React from 'react';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button
};

export const Primary = (args) => <Button {...args}>Button</Button>;

Primary.storyName = 'Button';

Primary.args = {
  size: 'md',
  color: 'primary',
  outline: false
};
