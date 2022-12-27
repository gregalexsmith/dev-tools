import React, { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { IconError, IconInfo, IconWarning } from '../icons';

type AlertType = 'info' | 'warning' | 'error';

export type AlertProps = ComponentProps<'div'> & {
  type: AlertType;
};

const alertTypeStyles = (type: AlertType) =>
  ({
    info: classNames(
      'text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800'
    ),
    warning: classNames(
      'text-amber-700 bg-amber-100 dark:bg-amber-200 dark:text-amber-800'
    ),
    error: classNames(
      'text-red-800 bg-red-100 dark:bg-red-200 dark:text-red-800'
    )
  }[type]);

const getIcon = (type: AlertType) =>
  ({
    info: IconInfo,
    warning: IconWarning,
    error: IconError
  }[type]);

export const Alert: FC<AlertProps> = ({
  children,
  type = 'info',
  className
}) => {
  const Icon = getIcon(type);
  return (
    <div
      className={classNames(
        'flex p-4 mb-4 text-sm rounded-lg',
        alertTypeStyles(type),
        className
      )}
      role="alert">
      <Icon className="inline flex-shrink-0 mr-3 w-5 h-5" />
      <div>{children}</div>
    </div>
  );
};
