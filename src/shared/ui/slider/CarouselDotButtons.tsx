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
`