import React from 'react';
import { Checkbox } from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      options: [null, 'Testing a Checkbox'],
      control: 'radio'
    }
  }
};

export const Primary = (args) => <Checkbox {...args} value="test" id="test" />;

Primary.storyName = 'Checkbox';

Primary.args = {
  value: 'test',
  id: 'test',
  label: 'Testing a Checkbox'
};
