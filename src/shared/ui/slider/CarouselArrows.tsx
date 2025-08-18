import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import type { EmblaCarouselType } from 'embla-carousel'

const ArrowIcon = ({ direction }: { direction: 'prev' | 'next' }) => (
    <svg viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d={direction === 'prev'
                ? "M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z"
                : "M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"
            }
        />
    </svg>
)

export const CarouselArrows = ({ emblaApi }: { emblaApi: EmblaCarouselType }) => {
    const [prevDisabled, setPrevDisabled] = useState(true)
    const [nextDisabled, setNextDisabled] = useState(true)

    const scrollPrev = useCallback(() => emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi.scrollNext(), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setPrevDisabled(!emblaApi.canScrollPrev())
            setNextDisabled(!emblaApi.canScrollNext())
        }

        emblaApi.on('select', onSelect)
        onSelect()

        return () => {
            if (emblaApi) {
                emblaApi.off('select', onSelect)
            }
        }
    }, [emblaApi])

    if (!emblaApi) return null

    return (
        <ArrowsContainer>
            <ArrowButton
                onClick={scrollPrev}
                disabled={prevDisabled}
                aria-label="Previous slide"
            >
                <ArrowIcon direction="prev" />
            </ArrowButton>

            <ArrowButton
                onClick={scrollNext}
                disabled={nextDisabled}
                aria-label="Next slide"
            >
                <ArrowIcon direction="next" />
            </ArrowButton>
        </ArrowsContainer>
    )
}

const ArrowsContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 1;
`

const ArrowButton = styled.button`
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease;

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: rgba(0, 0, 0, 0.8);
    }
`