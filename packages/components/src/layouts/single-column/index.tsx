import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  fullHeight?: boolean;
  className?: string;
  classNameContainer?: string;
  children: ReactNode;
};

export const SingleColumn: FC<Props> = ({
  fullHeight,
  classNameContainer,
  className,
  children,
  ...rest
}) => (
  <div className={classNames(fullHeight && 'h-full', classNameContainer)}>
    <div
      className={classNames(
        'px-2 sm:mx-auto',
        'w-full sm:w-[80%] md:w-[60%]',
        fullHeight && 'h-full',
        className
      )}
      {...rest}>
      {children}
    </div>
  </div>
);
