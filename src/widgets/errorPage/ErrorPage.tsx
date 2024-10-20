import React from 'react';
import styled, {useTheme} from 'styled-components';
import {ROUTES_PATHS} from '../../shared/constants/ROUTES_PATHS';
import {Link, useNavigate} from 'react-router-dom';
import {S_Flex} from '../../shared/styled/S_Flex';
import {outline} from '../../app/styles/mixins';


type props = {};
export const ErrorPage = ({}: props) => {
    const navigate = useNavigate()

    return (
        <S_ErrorPage>
            <h1>Something went wrong 😢</h1>

            <S_Flex $direction = {"column"}>

                <Link to = {ROUTES_PATHS.home.url}>Перейти на главную</Link>
                <button onClick={()=>navigate(-1)}>Вернуться на предыдущую</button>
                {/*<Link to = {navigate(-1)}>Вернуться на предыдущую</Link>*/}

            </S_Flex>


        </S_ErrorPage>);
};

export const S_ErrorPage = styled.section<{}>`
  width: 100%;
  flex-grow: 1;
  align-content: center;
  margin: auto;
  text-align: center;

  a, button {
    display: inline-block;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    padding: 2rem;
    font-size: 2rem;
    margin-top: 2rem;
  }

  ${S_Flex} {
      //${outline()}
    width: max-content;
    margin: auto;
  }

`
