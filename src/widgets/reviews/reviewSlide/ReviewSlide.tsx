import React from 'react';
import {AppSwiperSlide} from '../../../shared/ui/Swiper/AppSwiperSlide';
import {ReviewCard} from '../reviewCard/ReviewCard';
import {v4 as uuidv4} from 'uuid';
import {reviewsData} from '../reviewData';


type props = {
    swiperId: string
};
export const ReviewCardsList = ({swiperId}: props) => {

    return (<React.Fragment>
            {reviewsData.map((review, index) => {
                    const slideId = uuidv4();
                    return (
                        <AppSwiperSlide id = {slideId} key = {`${swiperId}-${index}`}>
                            <ReviewCard userName = {review.userName}
                                        reviewContent = {review.reviewContent}/>
                        </AppSwiperSlide>)
                }
            )}
        </React.Fragment>
    )


}

