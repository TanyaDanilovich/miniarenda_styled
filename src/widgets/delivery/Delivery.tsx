import React from 'react';
import {S_Delivery, S_DeliveryPrice} from './S_Delivery';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {Container} from '../../shared/styled/Container';


type props = {};
export const Delivery = ({}: props) => {
    const text = "Наличие собственного эвакуатора Mercedes 814 общей грузоподъемностью 5 тонн и длинной 5,6 метров позволяет доставить мини-погрузчики и мини-экскаваторы на ваш объект в кратчайший срок. Платформа легко выдержит перевозку минитехники на любое расстояние по Беларуси."
    const deliveryPrice = "Стоимость доставки: 150 р/МКАД, далее +2,5р/км"

    return (
        <S_Delivery>
            <Container>
                <SectionTitle title = {"Доставка техники на объект"} text = {text}/>
                <S_DeliveryPrice>{deliveryPrice}</S_DeliveryPrice>
            </Container>
        </S_Delivery>);
};


