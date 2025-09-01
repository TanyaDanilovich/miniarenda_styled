import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {GoogleLink} from './googleLink/GoogleLink';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import styled, {useTheme, css} from "styled-components";
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import bgImg from "../../assets/png/reviews-bg.png";
import {S_BackgroundWrapper} from '../../shared/styled/S_BackgroundWrapper';
import {ReviewCarousel} from './reviewsCarousel/ReviewCarousel';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';



type props = { offset: number };
export const Reviews = ({offset}: props) => {
    const theme = useTheme();

    return (
        <S_Reviews id = {"reviews"}>
            <S_BackgroundWrapper $offset = {offset} $backgroundColor = {theme.colors.white_smoke}>
                <S_OuterContainer>
                    <S_TitleContainer $isWithText = {false}>
                        <SectionTitle title = {"Отзывы наших клиентов"}/>
                    </S_TitleContainer>


                    <GoogleLink/>

                    <ReviewCarousel/>
                </S_OuterContainer>
            </S_BackgroundWrapper>
        </S_Reviews>);
};


export const S_Reviews = styled.section<{}>`
    background-image:url(${bgImg});
    ${sectionMargin};
    ${sectionPadding};
    background-position:top center;
    background-size:cover;
    background-attachment:fixed;
    //position: relative;
    background-repeat:no-repeat;
    background-color:${({theme}) => theme.colors.white_smoke};

    & h2{
        margin-top:2rem;
    }
`

const S_TitleContainer = styled.div<{ $isWithText: boolean }>`
  margin-block: ${getResponsiveSize(BASE * 2, BASE * 4)};
  white-space: normal;

  p {
    font-size: 1rem;
    text-align: justify;
  }

  @media ${({theme}) => theme.mediaMinWidth.largeMobile} {
    display: flex;
    gap: 1rem;
    width: 100%;

    ${({$isWithText}) => $isWithText && css`
      border-left: 5px solid ${({theme}) => theme.colors.primary};
      align-items: center;

      @media ${({theme}) => theme.mediaMinWidth.tablet} {
        p {
          width: 50%;
        }
      }
    `}
  }
`;


