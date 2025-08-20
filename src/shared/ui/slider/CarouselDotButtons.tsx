import {type ComponentPropsWithRef} from 'react'
import styled from 'styled-components'

type PropType = ComponentPropsWithRef<'button'>

export const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <S_AppCarouselDotButton {...restProps}>
            {children}
        </S_AppCarouselDotButton>
    )
}


const S_AppCarouselDotButton = styled.button<{ $isActive?: boolean }>`
    width: ${({ $isActive }) => $isActive ? '12px' : '8px'};
    height: ${({ $isActive }) => $isActive ? '12px' : '8px'};
    border-radius: 50%;
    border: none;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: ${({ $isActive }) => $isActive ? 1 : 0.5};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        opacity: 1;
    }




   
        -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        touch-action: manipulation;
        display: inline-flex;
        text-decoration: none;
        cursor: pointer;
        border: 0;
        padding: 0;
        margin: 0;
        width: 2.6rem;
        height: 2.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    


`