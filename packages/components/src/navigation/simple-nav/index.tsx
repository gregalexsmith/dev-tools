import React, { FC, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from '../../link';

type NavLinkProps = PropsWithChildren & {
  to: string;
  content: ReactNode;
};

const NavLink: FC<NavLinkProps> = ({ to, content }) => (
  <Link
    to={to}
    className={classNames(
      'ml-4',
      'text-neutral-600',
      'hover:text-neutral-900 hover:no-underline'
    )}>
    {content}
  </Link>
);

const SimpleNavBase: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex items-center">
    <h1
      className={classNames(
        'py-3',
        'text-lg',
        'font-bold',
        'text-neutral-600'
      )}>
      React Starter
    </h1>

    <div className="mx-auto" />

    <>{children}</>
  </div>
);

export const SimpleNav = Object.assign(SimpleNavBase, {
  NavLink
});
