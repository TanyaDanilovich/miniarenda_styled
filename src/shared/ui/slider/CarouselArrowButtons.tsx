import {type ComponentPropsWithRef} from 'react';
import styled from 'styled-components';
import {BREAKPOINTS} from '../../constants/BREAKPOINTS';

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




const S_AppCarouselArrowButton = styled.button`
    //width: 0;
    background-color:${({theme}) => theme.colors.primary};
    //height: 1rem;
    color:white;
    transform:skewX(9deg);
    box-shadow:3px 3px 0 0 ${({theme}) => theme.colors.dark};
    //padding-block: 0.5rem;
    @media screen and (min-width:${BREAKPOINTS.tablet}){
        width:50px;
    }

    &:disabled{
        opacity:0.3;
        cursor:not-allowed;
    }

    &:not(:disabled):hover{
        background:rgba(0, 0, 0, 0.5);
    }

    //-webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
    //-webkit-appearance: none;
    //appearance: none;
    //touch-action: manipulation;
`

export const S_AppCarouselNextButton = styled(S_AppCarouselArrowButton)`
    margin-right:2vw;
`

export const S_AppCarouselPrevButton = styled(S_AppCarouselArrowButton)`
    margin-left:2vw;
`