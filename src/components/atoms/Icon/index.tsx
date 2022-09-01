import type { IconBaseProps } from 'react-icons';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FaUniversalAccess } from 'react-icons/fa';
import { GrReactjs, GrDocker } from 'react-icons/gr';
import { SiJest } from 'react-icons/si';

import { ICON_NAMES } from '~/const/icon';
import type { IconName } from '~/const/icon';
import { COLORS } from '~/const/style';

export type IconProps = {
  name: IconName;
  size?: number;
};

/**
 * アイコン
 *
 * @param props {@see IconProps}
 */
export const Icon = (props: IconProps) => {
  const { name, size = 32 } = props;
  const iconProps: IconBaseProps = {
    size,
    role: 'img',
    'aria-label': name.toLocaleLowerCase(),
  };

  switch (name) {
    case ICON_NAMES.DOCKER:
      return <GrDocker color={COLORS.DOCKER.code} {...iconProps} />;

    case ICON_NAMES.WEB_ACCESSIBILITY:
      return <FaUniversalAccess color={COLORS.W3C.code} {...iconProps} />;

    case ICON_NAMES.REACT:
      return <GrReactjs color={COLORS.REACT.code} {...iconProps} />;

    case ICON_NAMES.TEST:
      return <SiJest color={COLORS.JEST.code} {...iconProps} />;

    case ICON_NAMES.SUN:
      return <BsSunFill {...iconProps} />;

    case ICON_NAMES.MOON:
      return <BsMoonStarsFill {...iconProps} />;

    default:
      return null;
  }
};
