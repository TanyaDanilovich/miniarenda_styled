import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import {ReadMore} from './ReadMore';
import {BASE, countReviewLines} from '../../../shared/constants';

//

type props = {
    text: string
};
export const ReviewContent = ({text}: props) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean | null>(true)
    const [showButton, setShowButton] = useState<boolean | null>(null);
    const contentRef = useRef<HTMLParagraphElement>(null)


    const readMoreCallback = () => setIsCollapsed(prev => !prev)

    const debounceFunction = (cb: () => void, delay: number) => {
        let timer: ReturnType<typeof setTimeout>
        return () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => cb(), delay);

        };
    };


    useEffect(() => {
        const checkIsShowButton = () => {
            if (contentRef.current) {
                if (contentRef.current.scrollHeight <= (Math.round(BASE * countReviewLines * 1.4))) {
                    setIsCollapsed(false)
                    setShowButton(false)
                } else {
                    setIsCollapsed(true)
                    setShowButton(true)
                }
            }
        }


        const debounce = debounceFunction(checkIsShowButton, 250);
        window.addEventListener("resize", debounce);
        checkIsShowButton();
        return () => window.removeEventListener("resize", debounce);


    }, [contentRef]);

    return (
        <S_reviewContent $isCollapsed = {isCollapsed}>
            <p ref = {contentRef}>{text}</p>
            {showButton && <ReadMore isCollapsed = {isCollapsed} callback = {readMoreCallback}/>}
        </S_reviewContent>
    );
};


export const S_reviewContent = styled.div<{ $isCollapsed: boolean | null }>`
  ${({$isCollapsed}) => $isCollapsed && css`
    p {
      padding-top: 1rem;
      -webkit-line-clamp: ${countReviewLines};
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
      position: relative;
    }

    //
    //p:after {
    //  color: #ddd;
    //  content: '"';
    //  // font-family: FontAwesome;
    //  font-size: 65px;
    //  margin: auto;
    //  position: absolute;
    //  right: 0;
    //  bottom: 0;
    //  z-index: 2;
    //  opacity: 0.85;
    //}
  `}
`