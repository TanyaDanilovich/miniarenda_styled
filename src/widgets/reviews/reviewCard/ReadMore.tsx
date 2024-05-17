import React from 'react';
import styled from 'styled-components';


type props = {
    isCollapsed: boolean | null,
    callback: () => void
};
export const ReadMore = ({isCollapsed, callback}: props) => {

    return (
        <S_ReadMore $isCollapsed = {isCollapsed}
                    onClick = {() => callback()}>
            {isCollapsed ? "Читать далее" : "Свернуть"}
        </S_ReadMore>
    );
};

export const S_ReadMore = styled.div<{ $isCollapsed: boolean | null }>`
  text-decoration: underline;
  color: ${({theme}) => theme.colors.dimGray};
  margin-top: 0.75rem;
`
