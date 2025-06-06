import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import img1 from '../../../assets/images/hero-slider/1920px/_DSC2623-1920w.jpg';
import img2 from '../../../assets/images/hero-slider/1920px/_DSC4666-1920w.jpg';
import img3 from '../../../assets/images/hero-slider/1920px/_DSC4349-1920w.jpg';
import img4 from '../../../assets/images/hero-slider/1920px/_DSC4764-1920w.jpg';

interface SlideData {
    id: number;
    image: string;
    name: string;
    title: string;
    quote: string;
}

interface SlideProps {
    bg: string;
    position: 'activeSlide' | 'lastSlide' | 'nextSlide';
}

const slides: SlideData[] = [
    {
        id: 1,
        image: img1,
        name: 'maria ferguson',
        title: 'office manager',
        quote:
            'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: 2,
        image: img2,
        name: 'john doe',
        title: 'regular guy',
        quote:
            'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
        id: 3,
        image: img3,
        name: 'peter smith',
        title: 'product designer',
        quote:
            'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
        id: 4,
        image: img4,
        name: 'susan andersen',
        title: 'the boss',
        quote:
            'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.',
    },
];

const Slider: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const startX = useRef<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [current]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + length) % length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - startX.current;
        if (deltaX > 50) prevSlide();
        else if (deltaX < -50) nextSlide();
        startX.current = null;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        startX.current = e.clientX;
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (startX.current === null) return;
        const deltaX = e.clientX - startX.current;
        if (deltaX > 50) prevSlide();
        else if (deltaX < -50) nextSlide();
        startX.current = null;
    };

    return (
        <Wrapper>
            <SliderContainer
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                {slides.map((slide, index) => {
                    let position: SlideProps['position'] = 'nextSlide';
                    if (index === current) position = 'activeSlide';
                    else if (
                        index === current - 1 ||
                        (current === 0 && index === slides.length - 1)
                    )
                        position = 'lastSlide';

                    return (
                        <Slide key={slide.id} bg={slide.image} position={position}>
                            <SlideContent>
                                <Title>{slide.title}</Title>
                                <Description>{slide.quote}</Description>
                            </SlideContent>
                        </Slide>
                    );
                })}

                <Arrow className="prev" onClick={prevSlide}>
                    ‹
                </Arrow>
                <Arrow className="next" onClick={nextSlide}>
                    ›
                </Arrow>
            </SliderContainer>
        </Wrapper>
    );
};

export default Slider;

// ----------------- Стили и анимации -----------------

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: clamp(250px, 50vw, 600px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Slide = styled.article<SlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  opacity: 0;
  z-index: 0;
  transform: translateX(100%);

  ${(props) =>
          props.position === 'activeSlide' &&
          css`
      z-index: 2;
      animation: ${fadeIn} 0.8s ease forwards;
      transform: translateX(0);
    `}

  ${(props) =>
          props.position === 'lastSlide' &&
          css`
      z-index: 1;
      animation: ${fadeOut} 0.6s ease forwards;
      transform: translateX(-100%);
    `}

  ${(props) =>
          props.position === 'nextSlide' &&
          css`
      z-index: 0;
      transform: translateX(100%);
    `}
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 1.25rem 2rem;
  max-width: 80%;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    left: 1rem;
    right: 1rem;
    padding: 1rem;
    font-size: 0.85rem;
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: var(--clr-primary-5, #f59e0b);
`;

const Description = styled.p`
  color: var(--clr-grey-5, #e5e7eb);
  line-height: 1.7;
  font-size: 0.95rem;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 5;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;
