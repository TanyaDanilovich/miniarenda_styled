import React from 'react';
import styled from 'styled-components';
import {ROUTES_PATHS} from '../../shared/constants/ROUTES_PATHS';

import {S_Flex} from '../../shared/styled/S_Flex';
import {outline, plainTransition} from '../../app/styles/mixins';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {translateAnimation} from '../../app/styles/animation';
import {Link} from '../../shared/ui/Link';


type props = {};
export const ErrorPage = ({}: props) => {
    // const navigate = useNavigate()

    return (
        <S_ErrorPage>
            <h1>Something went wrong 😢</h1>

            <S_Flex $direction = {"column"}>

                <Link to = {ROUTES_PATHS.home.url}>Перейти на главную</Link>
                {/*<button onClick = {() => navigate(-1)}>Вернуться на предыдущую</button>*/}
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
    //${plainTransition()}
  //transform: translateY(0);

  a, button {
    --size: ${getResponsiveSize(16, 32)};
    display: inline-block;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    padding: var(--size);
    font-size: var(--size);
    margin: var(--size);
  }

  ${S_Flex} {
      //${outline()}
    width: max-content;
    margin: auto;
  }

  a:hover,
  button:hover {
    ${plainTransition()}
    ${translateAnimation({
      transformType: "translateY",
      start: "0",
      middle: "-10%",
      duration: "1s",
    })}
  }
`
