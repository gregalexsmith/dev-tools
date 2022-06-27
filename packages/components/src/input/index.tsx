import React, { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { InputWrapper, InputWrapperProps } from './wrapper';

type Size = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?: Size;
  icon?: InputWrapperProps['icon'];
}

export const Input: FC<InputProps> = ({ size = 'md', icon, ...rest }) => {
  return (
    <InputWrapper icon={icon}>
      <input
        {...rest}
        className={classNames(
          'w-full block my-2 border rounded-sm',
          'focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1',
          {
            'p-1 pl-2 text-sm': size === 'sm',
            'p-2 pl-3 text-md': size === 'md',
            'p-3 pl-3 text-lg': size === 'lg'
          },
          icon && 'pl-10'
        )}
      />
    </InputWrapper>
  );
};
