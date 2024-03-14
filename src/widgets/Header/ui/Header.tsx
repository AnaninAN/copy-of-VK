import cls from './Header.module.scss';
import VkIcon from '@/shared/assets/icons/icons8-vk.svg';

import { AppContainer } from '@/shared/ui/AppContainer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppIcon } from '@/shared/ui/AppIcon';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppContainer>
        <AppIcon Svg={VkIcon} className={cls.navbar__logo} />
        <div className={cls.navbar__search}></div>
        <div className={cls.navbar__btns}></div>
        <div className={cls.navbar__audio}></div>
        <ThemeSwitcher />
      </AppContainer>
    </div>
  );
};
