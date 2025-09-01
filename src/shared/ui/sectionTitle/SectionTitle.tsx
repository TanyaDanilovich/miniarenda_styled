
import styled, {css} from 'styled-components';


type props = { title: string, text?: string, color?: string };
export const SectionTitle = ({title, text, color}: props) => (
    <>
        <S_SectionTitle $isWithText = {!!text} $color = {color}>
            {title}
        </S_SectionTitle>
        {text && <p>{text}</p>}
    </>
);

export const S_SectionTitle = styled.h2<{ $isWithText: boolean, $color?: string }>`
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
  position: relative;
  font-size: ${({theme}) => theme.fonts.size.h2};
  width: 100%;
  color: ${({$color}) => $color || "inherit"};
  ${({$isWithText}) => $isWithText && css`
    @media ${({theme}) => theme.mediaMinWidth.tablet} {
      width: 50%;
      padding-left: 1.5rem;
      text-align: left;
    }
  `}

`;