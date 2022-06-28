import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

export type LinkProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
};

const linkStyles = 'text-blue-600 dark:text-blue-500 hover:underline';

export const Link: FC<LinkProps> = ({ to, href, children, className }) => {
  if (to) {
    return (
      <RouterLink to={to} className={classNames(linkStyles, className)}>
        {children}
      </RouterLink>
    );
  }

  if (!href) throw new Error('"to" or "href" is required');

  return (
    <a href={href} className={classNames(linkStyles, className)}>
      {children}
    </a>
  );
};
