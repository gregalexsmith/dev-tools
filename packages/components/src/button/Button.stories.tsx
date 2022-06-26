/* eslint-disable import/export */
import React from 'react';
import { Button } from '.';

// Button.stories.js|jsx

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button
};

export const Primary = () => <Button>Button</Button>;
