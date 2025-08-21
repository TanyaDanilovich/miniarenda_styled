import {type ComponentPropsWithRef} from 'react'
import styled from 'styled-components'

type PropType = { isActive: boolean } & ComponentPropsWithRef<'button'>

export const DotButton = (props: PropType) => {
    const {children, isActive, ...restProps} = props

    return (
        <S_AppCarouselDotButton $isActive = {isActive} {...restProps}>
            {children}
        </S_AppCarouselDotButton>
    )
}


const S_AppCarouselDotButton = styled.button<{ $isActive?: boolean }>`

    display:inline-block;
    width:${({$isActive}) => $isActive ? '10px' : '8px'};
    height:${({$isActive}) => $isActive ? '10px' : '8px'};
    border-radius:50%;
    border:none;
    padding:0;
    background-color:${({theme}) => theme.colors.primary};
    opacity:${({$isActive}) => $isActive ? 1 : 0.5};
    cursor:pointer;
    transition:all 0.3s ease;

    &:not(:last-child){
        margin-right:1rem;
    }

    &:hover{
        opacity:1;
    }
`