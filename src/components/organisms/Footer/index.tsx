import * as Styled from './style';

/**
 * フッター
 */
export const Footer = () => {
  return (
    <Styled.Footer>
      &copy; {new Date().getFullYear()} Guildex LLC.
    </Styled.Footer>
  );
};
