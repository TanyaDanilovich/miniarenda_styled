import React from 'react';
import styled from 'styled-components';
import {ROUTES_PATHS} from '../../shared/constants/ROUTES_PATHS';
import {Link} from 'react-router-dom';


type props = {};
export const ErrorPage = ({}: props) => {


    return (
        <S_ErrorPage>
            <div>
                <h1>Something went wrong 😢</h1>

                <Link to = {ROUTES_PATHS.home.url}>Перейти на главную</Link>

            </div>


        </S_ErrorPage>);
};

export const S_ErrorPage = styled.section<{}>`
  aspect-ratio: 4/3;
  width: 100%;


  @media ${({theme}) => theme.media.computer} {
    height: calc(100svh - 110px);
    aspect-ratio: initial;
  }

`
