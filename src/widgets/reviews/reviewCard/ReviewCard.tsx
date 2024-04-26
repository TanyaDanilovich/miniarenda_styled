import React from 'react';
import {S_ReviewCard, S_UserLetter, S_UserName} from './S_ReviewsCard';
import {ReviewContent} from './ReviewContent';


type props = {
    userName: string,
    reviewContent: string
};
export const ReviewCard = ({userName, reviewContent}: props) => {

    return (
        <S_ReviewCard>

            {/*<S_Flex $align = {"center"} $gap = {"1rem"}>*/}
            <S_UserLetter>{userName[0]}</S_UserLetter>
            <S_UserName>{userName}</S_UserName>
            {/*</S_Flex>*/}

            <ReviewContent text = {reviewContent}/>
        </S_ReviewCard>);
};


