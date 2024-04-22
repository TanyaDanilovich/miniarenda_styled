import styled, {useTheme} from "styled-components";

import {Container} from '../../shared/styled/Container';
import {StyledButton} from '../../shared/styled/StyledButton';
import React from 'react';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {StyledBox} from '../../shared/styled/Box';

type props = {};
export const Main = ({}: props) => {
    const theme = useTheme()
    return (


        <StyledMain>
            <Container>
                <StyledBox $marginTop = {"1rem"}>
                    <StyledButton $monocolor>
                        <StyledCircle>
                            <FontAwesomeIcon icon = {faPlusCircle} size = {'1x'} color = {theme.colors.primary}/>
                        </StyledCircle>
                        <span>&nbsp;Подробнее</span>
                    </StyledButton>
                </StyledBox>
            </Container>
        </StyledMain>


    );
};

export const StyledMain = styled.footer<{}>`
  background-color: ${({theme}) => theme.colors.bg_primary};
  color: ${({theme}) => theme.colors.white};`

export const StyledCircle = styled.span<{}>`
  display: inline-block;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 50%;
  line-height: 1;
  padding: 4px;
`

