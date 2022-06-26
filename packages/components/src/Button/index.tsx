import React, { FC, ComponentProps } from 'react';
import classNames from 'classnames';

type Size = 'sm' | 'md' | 'lg';

type ButtonColor = 'primary';

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'color'> {
  size?: Size;
  color?: ButtonColor;
  outline?: boolean;
}

const colorStyles = (color: ButtonColor) =>
  ({
    primary: classNames(
      'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-300',
      'dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
    )
  }[color]);

const outlineStyles = (color: ButtonColor) =>
  ({
    primary: classNames(
      'bg-transparent text-primary-700 border border-primary-700',
      'hover:text-white hover:bg-primary-800 hover:border-primary-800',
      'focus:ring-primary-300'
    )
  }[color]);

export const Button: FC<ButtonProps> = ({
  children,
  size = 'md',
  type = 'button',
  color = 'primary',
  outline = false,
  ...props
}) => {
  const Component = 'button';

  return (
    <Component
      className={classNames(
        'mr-2 mb-2',
        'font-medium',
        'transition-colors',
        'focus:ring-4 focus:outline-none',
        'rounded-md',
        colorStyles(color),
        outline && outlineStyles(color),
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-md': size === 'md',
          'px-5 py-2.5 text-lg': size === 'lg'
        }
      )}
      type={type}
      {...props}>
      {children}
    </Component>
  );
};
