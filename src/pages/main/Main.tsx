import styled from "styled-components";
import React from 'react';
import {Services} from '../../widgets/services/Services';

import {Machineries} from '../../widgets/machineries/Machineries';
import {machineriesData} from '../../shared/data/machineriesData';
import {Delivery} from '../../widgets/delivery/Delivery';
import {Reviews} from '../../widgets/reviews/Reviews';
import {Questions} from '../../widgets/questions/Questions';
import {Clients} from '../../widgets/clients/Clients';
import {OrderModal} from '../../widgets/orderModal/OrderModal';
import {Hero} from '../../widgets/hero/Hero';


type props = {};

export const Main = ({}: props) => {


    return (
        <StyledMain>
            <Hero/>
            <Services/>
            <Machineries data = {machineriesData}/>
            <Delivery/>
            <Reviews/>
            <Questions/>
            <Clients/>
            <OrderModal/>
        </StyledMain>


    );
};

export const StyledMain = styled.main
    < {} > `


`


