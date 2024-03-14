import cls from './ThemeSwitcher.module.scss';
import IconTheme from '@/shared/assets/icons/icon-theme.svg';

import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppButton } from '@/shared/ui/AppButton';
import { AppIcon } from '@/shared/ui/AppIcon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  return (
    <AppButton
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <AppIcon className={cls.icon} Svg={IconTheme} />
    </AppButton>
  );
});
