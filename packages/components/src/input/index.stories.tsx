import React from 'react';
import { Input } from '.';

export default {
  title: 'Input',
  component: Input
};

export const Primary = (args) => <Input {...args} />;

Primary.storyName = 'Input';

Primary.args = {
  size: 'md'
};
