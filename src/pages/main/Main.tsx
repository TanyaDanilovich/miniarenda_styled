import styled from "styled-components";
import React, {useEffect, useRef, useState} from 'react';
import {Services} from '../../widgets/services/Services';
import {Machineries} from '../../widgets/machineries/Machineries';
import {Delivery} from '../../widgets/delivery/Delivery';
import {Reviews} from '../../widgets/reviews/Reviews';
import {Questions} from '../../widgets/questions/Questions';
import {Clients} from '../../widgets/clients/Clients';
import {OrderModal} from '../../widgets/orderModal/OrderModal';
import {Hero} from '../../widgets/hero/Hero';
import {Equipments} from '../../widgets/equipments/Equipments';
import Skills from '../../widgets/skills/Skills';
import {Prices} from '../../widgets/prices/Prices';


type props = {};

export const Main = ({}: props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [refOffset, setRefOffset] = useState<number>(0);

    useEffect(() => {
        if (ref.current) {
            setRefOffset(((ref.current.scrollWidth - ref.current.clientWidth) / 2))
        }
    }, []);

    return (
        <StyledMain ref = {ref}>
            <Hero/>
            <Services/>
            <Skills/>
            <Prices/>
            <Machineries/>

            <Equipments offset = {refOffset}/>
            <Reviews offset = {refOffset}/>
            <Questions/>
            <Clients/>
            <OrderModal/>
        </StyledMain>


    );
};

export const StyledMain = styled.main
    < {} > `


`


