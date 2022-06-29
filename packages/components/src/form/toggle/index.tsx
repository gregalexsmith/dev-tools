import React, { ComponentProps, FC } from 'react';
import { Switch } from '@headlessui/react';
import classNames from 'classnames';

const SwitchLabel: FC<ComponentProps<'label'>> = ({
  className,
  children,
  ...rest
}) => (
  <Switch.Label
    className={classNames(
      'text-md font-medium cursor-pointer',
      'text-gray-900 dark:text-gray-300',
      className
    )}
    {...rest}>
    {children}
  </Switch.Label>
);

export type ToggleProps = ComponentProps<'button'> & {
  label: string;
  labelPosition: 'left' | 'right';
  onChange: (checked: boolean) => void;
  checked: boolean;
};

export const Toggle: FC<ToggleProps> = ({
  labelPosition = 'right',
  label,
  onChange,
  checked
}) => {
  return (
    <Switch.Group>
      <div className="flex items-center">
        {labelPosition === 'left' && (
          <SwitchLabel className="mr-4">{label}</SwitchLabel>
        )}
        <Switch
          checked={checked}
          onChange={onChange}
          className={classNames(
            checked
              ? 'bg-primary-600 hover:bg-primary-700'
              : 'bg-slate-300 hover:bg-slate-400',
            'relative inline-flex',
            'h-[26px] w-[44px]',
            'items-center rounded-full',
            'transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0'
          )}>
          <span className="sr-only">{label}</span>
          <span
            aria-hidden="true"
            className={classNames(
              checked ? 'translate-x-[20px]' : 'translate-x-1',
              'pointer-events-none inline-block rounded-full',
              'h-[20px] w-[20px]',
              checked ? 'bg-white' : 'bg-white',
              'shadow-lg ring-0',
              'transform transition duration-150 ease-in-out'
            )}
          />
        </Switch>
        {labelPosition === 'right' && (
          <SwitchLabel className="ml-4">{label}</SwitchLabel>
        )}
      </div>
    </Switch.Group>
  );
};
