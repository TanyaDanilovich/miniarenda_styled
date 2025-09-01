import {S_ReviewCard} from './S_ReviewsCard';
import {ReviewContent} from './ReviewContent';
import {Rating} from '../../../shared/ui/rating/Rating';
import styled from 'styled-components';
import checkmark from '../../../assets/icons/checkmark-circle-green.svg';


type props = {
    userName: string,
    reviewContent: string,
    isCollapsed: boolean | null,
    setCollapsed: () => void,
    setUnCollapsed: () => void,
};
export const ReviewCard = ({userName, reviewContent, isCollapsed, setUnCollapsed, setCollapsed}: props) => {

    return (
        <S_ReviewCard itemProp = "reviewRating" itemScope itemType = "http://schema.org/Rating">
            <S_ReviewCard_Header data-initial={userName[0]}>
                <S_Author itemProp="author">{userName}</S_Author>
                <Rating size="1x" />
                <S_RatingValue itemProp="ratingValue">5</S_RatingValue>
            </S_ReviewCard_Header>


            {/*<S_Flex $align = {"center"} $gap = {"0.5rem"}>*/}
            {/*    <S_UserLetter>{userName[0]}</S_UserLetter>*/}
            {/*    <S_Flex $align = {"start"} $gap = {"0.5rem"} $wrap = {'wrap'} $direction = {'column'}>*/}
            {/*        <S_UserName itemProp = "author">{userName}</S_UserName>*/}
            {/*        <Rating size = {'1x'}/>*/}
            {/*        <S_RatingValue itemProp = "ratingValue">5</S_RatingValue>*/}
            {/*    </S_Flex>*/}
            {/*</S_Flex>*/}

            <ReviewContent text = {reviewContent}
                           isCollapsed = {isCollapsed}
                           setCollapsed = {setCollapsed}
                           setUnCollapsed = {setUnCollapsed}/>
        </S_ReviewCard>);
};


export const S_RatingValue = styled.div`
  height: 1px;
  width: 1px;
  overflow: hidden;
`

export const S_ReviewCard_Header = styled.figcaption`
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-areas:
    "avatar name"
    "avatar rating";
  align-items: center;
  column-gap: 0.75rem;
  row-gap: 0.25rem;
  position: relative;
  padding-left: 0.25rem; 

 
  &::before{
    content: attr(data-initial);
    grid-area: avatar;
    display: grid;
    place-items: center;
    width: 3rem; height: 3rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
    font-size: 1.25rem;
    line-height: 3rem;
  }

 
  &::after{
    content: "";
    position: absolute;
    left: 2.2rem; top: 1.8rem;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: #fff url(${checkmark}) no-repeat center / contain;
  }
`;

export const S_Author = styled.span`
  grid-area: name;
  font: ${({ theme }) => `${theme.fonts.weight.semiBold} ${theme.fonts.size.p}/1.2 ${theme.fonts.family}`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;