import React from 'react';
import { Spinner } from '.';

export default {
  title: 'Loading/Spinner',
  component: Spinner
};

export const Primary = (args) => <Spinner {...args} />;

Primary.storyName = 'Spinner';

Primary.args = {
  size: 'md'
};
