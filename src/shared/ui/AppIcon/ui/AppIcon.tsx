import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppIconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const AppIcon = memo((props: AppIconProps) => {
  const { Svg, className } = props;

  return <Svg className={classNames('', {}, [className])} />;
});
