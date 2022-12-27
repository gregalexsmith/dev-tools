import React, { useEffect, useState } from 'react';
import { IconInfo } from '.';

export default {
  title: 'Icons',
  component: IconInfo,
  argTypes: {
    size: {
      options: ['xsm', 'sm', 'md', 'lg'],
      control: 'radio'
    }
  }
};

export const Primary = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Icons, SetIcons] = useState<null | any[]>(null);

  useEffect(() => {
    const loadIcons = async () => {
      const module = await import('./index');
      const icons = Object.entries(module);

      SetIcons(icons);
    };

    loadIcons();
  }, []);

  return (
    <div className="flex space-x-1 flex-wrap">
      {Icons?.map(([name, Icon], i) => (
        <div key={i} className="p-2 flex flex-col items-center ">
          <span className="text-slate-400 text-sm mb-1">
            {name.replace(/Icon/, '')}
          </span>
          <Icon {...args} />
        </div>
      ))}
    </div>
  );
};

Primary.storyName = 'Icons';

Primary.args = {
  size: 'sm'
};
