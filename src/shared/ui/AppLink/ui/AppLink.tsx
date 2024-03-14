import cls from './AppLink.module.scss';

import { memo, ReactNode } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, ...otherProps } = props;

  return (
    <NavLink
      to={to}
      className={classNames(cls.applLink, {}, [className])}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
