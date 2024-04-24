import styled from "styled-components";
import React from 'react';
import {Services} from '../services/Services';
import {servicesData} from '../../shared/lib/servicesData';
import {Machineries} from '../machineries/Machineries';
import {machineriesData} from '../../shared/lib/machineriesData';



type props = {};
export const Main = ({}: props) => {
    return (


        <StyledMain>
            {/*<Button type = {"read more"}/>*/}
            {/*<Button type = {"colored"}/>*/}
            <Services data={servicesData}/>
            <Machineries data={machineriesData}/>


        </StyledMain>


    );
};

export const StyledMain = styled.footer<{}>`
`


