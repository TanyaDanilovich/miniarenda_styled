import styled from 'styled-components'

type Props = {
    children: React.ReactNode
    className?: string
}

export const AppCarouselSlide = ({
                                     children,
                                     className = ''
                                 }: Props) => {
    return (
        <S_Slide className={`embla__slide ${className}`}>
            {children}
        </S_Slide>
    )
}

export const S_Slide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  position: relative;
`