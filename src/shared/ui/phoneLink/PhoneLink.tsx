import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {S_Flex} from '../../styled/S_Flex';


type props = {};
export const PhoneLink = ({}: props) => {

    return (
        <S_PhoneLink $align = {"center"} $gap = {"1rem"}>
            <FontAwesomeIcon icon = {faPhone} size = {'1x'}/>
            <a href = "tel:+375296949698">+375 (29) 694-96-98</a>
        </S_PhoneLink>);
};


export const S_PhoneLink = styled(S_Flex)<{}>`
`