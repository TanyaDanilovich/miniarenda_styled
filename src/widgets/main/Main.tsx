import styled from "styled-components";
import React from 'react';
import {Services} from '../services/Services';
import {servicesData} from '../../shared/lib/servicesData';



type props = {};
export const Main = ({}: props) => {
    return (


        <StyledMain>
            {/*<Button type = {"read more"}/>*/}
            {/*<Button type = {"colored"}/>*/}
            <Services data={servicesData}/>


        </StyledMain>


    );
};

export const StyledMain = styled.footer<{}>`
`


