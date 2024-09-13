import React, {useEffect, useState} from 'react';
import {AppSwiperSlide} from '../../../shared/ui/Swiper/AppSwiperSlide';
import {ReviewCard} from '../reviewCard/ReviewCard';
import {v4 as uuidv4} from 'uuid';


type props = {
    userName: string,
    reviewContent: string,
    close: boolean | null,
    resetClose: () => void
};
export const ReviewSlide = ({userName, reviewContent, close, resetClose}: props) => {

    const slideId = uuidv4();
    const [isCollapsed, setIsCollapsed] = useState<boolean | null>(true)

    useEffect(() => {
        if (close) {
            setIsCollapsed(true)
            resetClose()
        }
    }, [close]);

    const setCollapsed = () => setIsCollapsed(true)
    const setUnCollapsed = () => setIsCollapsed(false)

    return (
        <AppSwiperSlide id = {slideId}>
            <ReviewCard userName = {userName}
                        reviewContent = {reviewContent}
                        isCollapsed = {isCollapsed}
                        setCollapsed = {setCollapsed}
                        setUnCollapsed = {setUnCollapsed}
            />
        </AppSwiperSlide>

    )


}

