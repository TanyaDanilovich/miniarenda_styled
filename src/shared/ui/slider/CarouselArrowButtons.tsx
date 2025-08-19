import {type ComponentPropsWithRef} from 'react';
import styled from 'styled-components';

type PropType = ComponentPropsWithRef<'button'>


const ArrowIcon = ({direction}: { direction: 'prev' | 'next' }) => (
    <svg viewBox = "0 0 24 24">
        <path
            fill = "currentColor"
            d = {direction === 'prev'
                ? "M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z"
                : "M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"
            }
        />
    </svg>
)

export const PrevArrowButton = (props: PropType) => {
    const {children, ...restProps} = props

    return (
        <S_AppCarouselPrevButton {...restProps}>
            <ArrowIcon direction = "prev"/>
            {children}
        </S_AppCarouselPrevButton>
    )
}

export const NextArrowButton = (props: PropType) => {
    const {children, ...restProps} = props

    return (
        <S_AppCarouselNextButton {...restProps}>
            <ArrowIcon direction = "next"/>
            {children}
        </S_AppCarouselNextButton>
    )
}


export const S_AppCarouselArrowButtonsContainer = styled.div`
    position:absolute;
    top:50%;
    left:0;
    right:0;
    display:flex;
    justify-content:space-between;
    transform:translateY(-50%);
    z-index:1;
`

const S_AppCarouselArrowButton = styled.button`
    background:rgba(0, 0, 0, 0.5);
    border:none;
    border-radius:50%;
    width:40px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    color:white;
    transition:all 0.3s ease;

    &:disabled{
        opacity:0.3;
        cursor:not-allowed;
    }

    &:not(:disabled):hover{
        background:rgba(0, 0, 0, 0.8);
    }
`

export const S_AppCarouselNextButton = styled(S_AppCarouselArrowButton)``

export const S_AppCarouselPrevButton = styled(S_AppCarouselArrowButton)``