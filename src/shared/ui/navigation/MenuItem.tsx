import styled from "styled-components";
import React from 'react';
import {S_NavItem} from './S_NavItem';
import {S_NavLink} from './S_NavLink';

type props = {
    isOpen: boolean,
    isOpenToggle: () => void,
    setClose: () => void
};
export const MenuItem = ({isOpen, isOpenToggle, setClose}: props) => {
    return (


        <S_MenuItem>
            <S_NavItem>
                <S_NavLink to = "/"> Главная </S_NavLink>
            </S_NavItem>
        </S_MenuItem>


    );
};


export const S_MenuItem = styled.div<{}>`
    
`;