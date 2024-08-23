import React from 'react';
import styled from 'styled-components';
import {useNavigate, useRouteError} from 'react-router-dom';


type props = {};
export const ErrorPage = ({}: props) => {
    const navigate = useNavigate();
    const error = useRouteError() as Error;
    console.error(error);

    return (
        <S_ErrorPage>
            <div>
                <h1>Something went wrong 😢</h1>
                <p>
                    <i>{error.name || error.message}</i>


                    {/*<i>*/}
                    {/*    {(error as Error)?.message ||*/}
                    {/*        (error as { statusText?: string })?.statusText}*/}
                    {/*</i>*/}

                </p>
                <button onClick = {() => navigate(-1)}>&larr; Go back</button>
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
