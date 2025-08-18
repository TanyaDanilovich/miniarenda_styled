import styled from "styled-components";
import {useEffect, useRef, useState} from 'react';
import {Services} from '../../widgets/services/Services';
import {Machineries} from '../../widgets/machineries/Machineries';
import {Reviews} from '../../widgets/reviews/Reviews';
import {Questions} from '../../widgets/questions/Questions';
import {Clients} from '../../widgets/clients/Clients';
import {OrderModal} from '../../widgets/orderModal/OrderModal';
//import {Hero} from '../../widgets/hero/Hero';
import {Equipments} from '../../widgets/equipments/Equipments';
import Skills from '../../widgets/skills/Skills';
import {Prices} from '../../widgets/prices/Prices';
import {HeroCarousel} from '../../widgets/swipers/carousels/HeroCarousel';



export const Main = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [refOffset, setRefOffset] = useState<number>(0);

    useEffect(() => {
        if (ref.current) {
            setRefOffset(((ref.current.scrollWidth - ref.current.clientWidth) / 2))
        }
    }, []);

    return (
        <StyledMain ref = {ref}>
            <HeroCarousel id={"эрукщ-useEmblaCarousel"}/>
            {/*<Hero/>*/}
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
    < object > `
    margin-top: 4rem;
  @media ${({theme}) => theme.mediaMinWidth.tablet} {
   
margin-top: 0;
  }

`


