import React from 'react';
import { SingleColumn } from '.';

export default {
  title: 'Layouts/SingleColumn',
  component: SingleColumn,
  parameters: {
    layout: 'fullscreen'
  }
};

export const Primary = (args) => (
  <div className="h-[300px] m-4 border-dashed border-neutral-400 border-2">
    <SingleColumn {...args}>Content</SingleColumn>
  </div>
);

Primary.storyName = 'SingleColumn';

Primary.args = {
  fullHeight: false,
  className: 'bg-neutral-100',
  classNameContainer: 'bg-neutral-300'
};
