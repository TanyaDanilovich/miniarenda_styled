import { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import type { EmblaCarouselType } from 'embla-carousel'

export const CarouselDots = ({ emblaApi }: { emblaApi: EmblaCarouselType }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollTo = useCallback(
        (index: number) => emblaApi.scrollTo(index),
        [emblaApi]
    )

    useEffect(() => {
        const onInit = () => setScrollSnaps(emblaApi.scrollSnapList())
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())

        emblaApi.on('init', onInit)
        emblaApi.on('reInit', onInit)
        emblaApi.on('select', onSelect)

        onInit()
        onSelect()

        return () => {
            emblaApi.off('init', onInit)
            emblaApi.off('reInit', onInit)
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    return (
        <DotsContainer>
            {scrollSnaps.map((_, index) => (
                <DotButton
                    key={index}
                    $isActive={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </DotsContainer>
    )
}

const DotsContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 1;
`

const DotButton = styled.button<{ $isActive: boolean }>`
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