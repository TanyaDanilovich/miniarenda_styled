import styled from "styled-components";
import React from 'react';
import {Services} from '../services/Services';
import {servicesData} from '../../shared/lib/servicesData';
import {Machineries} from '../machineries/Machineries';
import {machineriesData} from '../../shared/lib/machineriesData';
import {Delivery} from '../delivery/Delivery';
import {Reviews} from '../reviews/Reviews';


type props = {};
export const Main = ({}: props) => {
    return (


        <StyledMain>
            <Services data = {servicesData}/>
            <Machineries data = {machineriesData}/>
            <Delivery/>
            <Reviews/>

        </StyledMain>


    );
};

export const StyledMain = styled.main<{}>`
`


