import React from 'react';
import {S_Reviews} from './S_Reviews';
import {S_SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {GoogleLink} from './googleLink/GoogleLink';
import {v4 as uuidv4} from 'uuid';
import {ReviewSwiper} from './reviewSwiper/ReviewSwiper';

type props = {};
export const Reviews = ({}: props) => {

    const swiperId = uuidv4();


    return (
        <S_Reviews>
            {/*<Container>*/}
            <S_SectionTitle>{"Отзывы наших клиентов"}</S_SectionTitle>
            <GoogleLink/>


            <ReviewSwiper id = {swiperId}/>


            {/*</Container>*/}


        </S_Reviews>);
};


