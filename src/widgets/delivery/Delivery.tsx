import React from 'react';
import {S_Delivery, S_DeliveryPrice} from './S_Delivery';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {S_Container} from '../../shared/styled/S_Container';


type props = {};
export const Delivery = ({}: props) => {
    const text = "У нас свои эвакуторы/грузовики/ Наёмный эвакуатор обойдётся в 2 раза дороже. Тарифы наёмных эвакуаторов больше, плюс Вы заплатите 2 раза, за то чтобы утром привести и вечером забрать технику. Наличие собственного эвакуатора Mercedes 814 общей грузоподъемностью 5 тонн и длинной 5,6 метров позволяет доставить мини-погрузчики и мини-экскаваторы на ваш объект в кратчайший срок. Платформа легко выдержит перевозку минитехники на любое расстояние по Беларуси."
    const deliveryPrice = "Стоимость доставки: 150 р/МКАД, далее +2,5р/км"

    return (
        <S_Delivery>

            <S_Container>
                <SectionTitle title = {"Доставка техники на объект"} text = {text}/>
                <S_DeliveryPrice>{deliveryPrice}</S_DeliveryPrice>
            </S_Container>
        </S_Delivery>);
};


