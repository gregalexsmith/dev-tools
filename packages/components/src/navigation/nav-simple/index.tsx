import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from '../../link';

type NavLinkProps = {
  to: string;
  children: ReactNode;
};

const NavLink: FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className={classNames(
      'ml-4',
      'text-neutral-600',
      'hover:text-neutral-900 hover:no-underline'
    )}>
    {children}
  </Link>
);

type NavSimpleBaseProps = {
  title: ReactNode;
  children: ReactNode;
};

const NavSimpleBase: FC<NavSimpleBaseProps> = ({ title, children }) => (
  <div className="flex items-center">
    <h1
      className={classNames(
        'py-3',
        'text-lg',
        'font-bold',
        'text-neutral-600'
      )}>
      {title}
    </h1>

    <div className="mx-auto" />

    <>{children}</>
  </div>
);

export const NavSimple = Object.assign(NavSimpleBase, {
  Link: NavLink
});
