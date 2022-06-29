import React, { ComponentProps, FC } from 'react';
import classNames from 'classnames';

export type LabelProps = ComponentProps<'label'>;

export const Label: FC<LabelProps> = ({ children, className, ...rest }) => {
  return (
    <label
      {...rest}
      className={classNames(
        'block mb-2',
        'text-sm font-medium',
        'text-gray-900 dark:text-gray-300',
        className
      )}>
      {children}
    </label>
  );
};
