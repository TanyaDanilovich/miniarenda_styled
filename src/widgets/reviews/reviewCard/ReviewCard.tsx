import React from 'react';
import {S_ReviewCard, S_UserLetter, S_UserName} from './S_ReviewsCard';
import {ReviewContent} from './ReviewContent';
import {S_Flex} from '../../../shared/styled/S_Flex';
import {Rating} from '../../../shared/ui/rating/Rating';


type props = {
    userName: string,
    reviewContent: string,
    isCollapsed: boolean | null,
    setCollapsed: () => void,
    setUnCollapsed: () => void,
};
export const ReviewCard = ({userName, reviewContent, isCollapsed, setUnCollapsed, setCollapsed}: props) => {

    return (
        <S_ReviewCard>
            <S_Flex $align = {"center"} $gap = {"0.5rem"}>
                <S_UserLetter>{userName[0]}</S_UserLetter>
                <S_Flex $align = {"start"} $gap = {"0.5rem"} $wrap = {'wrap'} $direction = {'column'}>
                    <S_UserName>{userName}</S_UserName>
                    <Rating size = {'xs'}/>
                </S_Flex>
            </S_Flex>

            <ReviewContent text = {reviewContent}
                           isCollapsed = {isCollapsed}
                           setCollapsed = {setCollapsed}
                           setUnCollapsed = {setUnCollapsed}/>
        </S_ReviewCard>);
};


