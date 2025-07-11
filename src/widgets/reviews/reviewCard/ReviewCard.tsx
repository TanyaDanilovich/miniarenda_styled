import React from 'react';
import {S_ReviewCard, S_UserLetter, S_UserName} from './S_ReviewsCard';
import {ReviewContent} from './ReviewContent';
import {S_Flex} from '../../../shared/styled/S_Flex';
import {Rating} from '../../../shared/ui/rating/Rating';
import styled from 'styled-components';


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
            <S_Flex $align = {"center"} $gap = {"0.5rem"}>
                <S_UserLetter>{userName[0]}</S_UserLetter>
                <S_Flex $align = {"start"} $gap = {"0.5rem"} $wrap = {'wrap'} $direction = {'column'}>
                    <S_UserName itemProp = "author">{userName}</S_UserName>
                    <Rating size = {'xs'}/>
                    <S_RatingValue itemProp = "ratingValue">5</S_RatingValue>
                </S_Flex>
            </S_Flex>

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