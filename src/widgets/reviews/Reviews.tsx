import React, {useId} from 'react';
import {S_Reviews} from './S_Reviews';
import {S_SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {Container} from '../../shared/styled/Container';
import {reviewsData} from './reviewData';
import {GoogleLink} from './googleLink/GoogleLink';
import {S_Flex} from '../../shared/styled/S_Flex';
import {ReviewCard} from './reviewCard/ReviewCard';


type props = {};
export const Reviews = ({}: props) => {
    const id = useId();


    return (
        <S_Reviews>
            <Container>
                <S_SectionTitle>{"Отзывы наших клиентов"}</S_SectionTitle>
                <GoogleLink/>

                <S_Flex $wrap = {"wrap"} $gap = {"1rem"} $style = {"margin-top: 2rem"}>
                    {reviewsData.map((review, index) =>
                        <ReviewCard key = {`${id}-${index}`} userName = {review.userName}
                                    reviewContent = {review.reviewContent}/>
                    )}
                </S_Flex>
            </Container>
        </S_Reviews>);
};


