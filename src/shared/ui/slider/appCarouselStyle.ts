import styled from 'styled-components';


export const S_AppCarouselWrapper = styled.section<{ $height?: number }>`
    position:relative;
    width:100%;
    height:${({$height}) => `${$height}px` || "100%"};
    margin:0 auto;
    /* те же CSS-переменные, что ты использовала */
    --slide-spacing:0px;
    --slide-size:100%;

`

export const S_AppCarouselViewport = styled.div`
    overflow:hidden;
    width:100%;
    height:100%;
`

export const S_AppCarouselContainer = styled.div`
    display:flex;
    height:100%;
    user-select:none;
    backface-visibility:hidden;
    margin-left:calc(var(--slide-spacing) * -1);
`

export const S_AppCarouselArrowButtonsContainer = styled.div`
    position:absolute;
    display:flex;
    left:0;
    right:0;
    top:50%;
`


export const S_AppCarouselDotsContainer = styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    z-index:2;
    display:flex;
`
