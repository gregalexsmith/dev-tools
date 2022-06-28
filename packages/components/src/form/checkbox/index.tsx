import React, { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { CheckboxWrapper } from './wrapper';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type'> & {
  label?: ReactNode;
};

export const Checkbox: FC<CheckboxProps> = ({ className, label, ...rest }) => {
  return (
    <CheckboxWrapper label={label}>
      <input
        {...rest}
        type="checkbox"
        className={classNames(
          'w-4 h-4',
          'text-blue-600 bg-slate-50 border-gray-300',
          'rounded',
          'focus:ring-2 focus:ring-offset-1 focus:ring-blue-600',
          className
        )}
      />
    </CheckboxWrapper>
  );
};
