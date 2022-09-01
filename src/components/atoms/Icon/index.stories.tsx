import type { Story } from '@storybook/react';

import { ICON_NAMES, type IconName } from '~/const/icon';

import { Icon, type IconProps } from '.';

export default {
  title: 'atoms/Icon',
  component: Icon,
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

const Icons = () => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {(Object.keys(ICON_NAMES) as IconName[]).map((key) => (
        <Icon key={key} name={key} />
      ))}
    </div>
  );
};

export const SampleIcon = Template.bind({});
SampleIcon.args = {
  name: ICON_NAMES.DOCKER,
};

export const IconList = Icons.bind({});
