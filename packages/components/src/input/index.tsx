import React, { ComponentProps, FC } from 'react';
import classNames from 'classnames';

type Size = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?: Size;
}

export const Input: FC<InputProps> = ({ size = 'md', ...rest }) => {
  return (
    <input
      {...rest}
      className={classNames(
        'w-full block my-2 pl-3 border rounded-sm',
        'focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1',
        {
          'p-1 text-sm': size === 'sm',
          'p-2 text-md': size === 'md',
          'p-3 text-lg': size === 'lg'
        }
      )}
    />
  );
};
