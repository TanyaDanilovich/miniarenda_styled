import {useEffect, useState} from 'react';
import {ReviewCard} from '../reviewCard/ReviewCard';


type props = {
    userName: string,
    reviewContent: string,
    close: boolean | null,
    resetClose: () => void
};
export const ReviewSlide = ({userName, reviewContent, close, resetClose}: props) => {


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

            <ReviewCard userName = {userName}
                        reviewContent = {reviewContent}
                        isCollapsed = {isCollapsed}
                        setCollapsed = {setCollapsed}
                        setUnCollapsed = {setUnCollapsed}
            />
    )
}

