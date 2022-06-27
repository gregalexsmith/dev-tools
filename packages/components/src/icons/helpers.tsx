import React, { ComponentProps, FC } from 'react';
import classNames from 'classnames';

type BaseSVGProps = ComponentProps<'svg'>;

export type SVGProps = BaseSVGProps & {
  size?: 'xsm' | 'sm' | 'md' | 'lg';
};

export const withDefaults = (Component: FC<BaseSVGProps>) => {
  const WithDefaults: FC<SVGProps> = ({ className, size = 'sm', ...rest }) => {
    return (
      <Component
        className={classNames(
          {
            'w-4 h-4': size === 'xsm',
            'w-6 h-6': size === 'sm',
            'w-8 h-8': size === 'md',
            'w-10 h-10': size === 'lg'
          },
          className
        )}
        {...rest}
      />
    );
  };
  return WithDefaults;
};
