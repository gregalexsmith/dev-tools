import React from 'react';
import { IconInfo } from '../icons';
import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    icon: {
      options: [null, 'Info'],
      mapping: {
        Info: <IconInfo className="text-slate-500" />
      },
      control: 'radio'
    }
  }
};

export const Primary = (args) => <Input {...args} />;

Primary.storyName = 'Input';

Primary.args = {
  size: 'md',
  icon: null
};
