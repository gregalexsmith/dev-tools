import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Alert } from '.';

export default {
  title: 'Alert',
  component: Alert
} as ComponentMeta<typeof Alert>;

const Template = (args) => (
  <Alert {...args}>
    <div>
      <div>Testing an alert message.</div>
      <div>Multi-line</div>
    </div>
  </Alert>
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.storyName = 'Alert';

Primary.args = {
  type: 'info'
};
