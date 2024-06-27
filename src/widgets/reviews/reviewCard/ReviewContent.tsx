import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import {ReadMore} from './ReadMore';
import {BASE, countReviewLines} from '../../../shared/constants';
import {outline} from '../../../app/styles/mixins';

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
                //console.log(contentRef.current.scrollHeight)
                if (contentRef.current.scrollHeight <= (Math.round(BASE * countReviewLines * 1.4) + BASE)) {
                    setIsCollapsed(false)
                    setShowButton(false)
                    //console.log(false)
                } else {
                    setIsCollapsed(true)
                    setShowButton(true)
                    //console.log(true)
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
  p {
    padding-top: 1rem;
  }

  ${({$isCollapsed}) => $isCollapsed && css`
    p {

      -webkit-line-clamp: ${countReviewLines};
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
      position: relative;
        //${outline(5)}
    }


    p:after {
      display: block;
      color: black;
      //content: close-quote;
      //content: '\201E';
      height: 4rem;
      width: 4rem;
      font-size: 3rem;
      margin: auto;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 2;
      //opacity: 0.85;
        //${outline(10)} //background-color: grey;
    }
  `}
`