import React from 'react';
import {S_Clients} from './S_Clients';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ClientsSwiper} from './ClientsSwiper/ClientsSwiper';
import {v4 as uuidv4} from 'uuid';


type props = {};
export const Clients = ({}: props) => {
    const swiperId = uuidv4();

    return (
        <S_Clients>


            <SectionTitle title = {"Работаем с частными лицами и организациями"} text = {''}/>
            <ClientsSwiper id = {swiperId}/>

        </S_Clients>);
};


