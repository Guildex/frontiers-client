import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { ICON_NAMES, type IconName } from '~/const/icon';

import { Icon } from '.';

describe('Icon', () => {
  test.each(Object.keys(ICON_NAMES) as IconName[])('%sアイコンが表示されること', (name) => {
    render(<Icon name={name} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img').getAttribute('aria-label')).toBe(name.toLocaleLowerCase());
  });
});
