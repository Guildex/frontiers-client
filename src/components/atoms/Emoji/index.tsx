import { memo } from 'react';
import { Emojione } from 'react-emoji-render';

import * as Styled from './style';

type EmojiProps = {
  emoji: string;
  size: number;
};

/**
 * emojiのラッパーコンポーネント
 *
 * @param props {@link EmojiProps}
 */
export const Emoji = memo((props: EmojiProps) => {
  const { emoji, size } = props;

  return (
    <Styled.Wrapper style={{ width: size, height: size }}>
      <Emojione svg text={emoji} options={{ protocol: 'https' }} />
    </Styled.Wrapper>
  );
});

Emoji.displayName = 'Emoji';
