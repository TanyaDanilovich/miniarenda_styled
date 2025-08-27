import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {GoogleLink} from './googleLink/GoogleLink';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import styled, {useTheme} from "styled-components";
import {sectionMargin, sectionPadding} from '../../app/styles/mixins';
import bgImg from "../../assets/png/reviews-bg.png"
import {S_BackgroundWrapper} from '../../shared/styled/S_BackgroundWrapper';
import {ReviewCarousel} from './reviewsCarousel/ReviewCarousel';



type props = { offset: number };
export const Reviews = ({offset}: props) => {
    const theme = useTheme();

    return (
        <S_Reviews id = {"reviews"}>
            <S_BackgroundWrapper $offset = {offset} $backgroundColor = {theme.colors.white_smoke}>
                <S_OuterContainer>
                    <SectionTitle title = {"Отзывы наших клиентов"}/>


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


