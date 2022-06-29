import React, { useState } from 'react';
import { Toggle } from '.';

export default {
  title: 'Form/Toggle',
  component: Toggle
};

export const Primary = (args) => {
  const [checked, onChange] = useState(false);
  return <Toggle {...args} checked={checked} onChange={onChange} />;
};

Primary.storyName = 'Toggle';

Primary.args = {
  labelPosition: 'right',
  label: 'Testing the Toggle Component',
  checked: null
};
