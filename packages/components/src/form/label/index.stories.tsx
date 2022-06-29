import React from 'react';
import { Label } from '.';

export default {
  title: 'Form/Label',
  component: Label
};

export const Primary = (args) => <Label {...args}>Testing Label</Label>;

Primary.storyName = 'Label';

Primary.args = {};
