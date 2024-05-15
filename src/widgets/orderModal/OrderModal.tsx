import React from 'react';
import {S_OrderModal} from './S_OrderModal';
import {S_Container} from '../../shared/styled/S_Container';
import {Button} from '../../shared/ui/button/Button';
import {S_Flex} from '../../shared/styled/S_Flex';


type props = {};
export const OrderModal = ({}: props) => {

    return (
        <S_OrderModal>

            <S_Container>
                <S_Flex>
                    <div>
                        <h4>
                            Доставим мини-&#8288;технику по Минску и Минской области
                        </h4>
                    </div>
                    <div>
                        <Button type = {'colored'}>
                            Заказать звонок
                        </Button>
                    </div>
                    {/*<SectionTitle title = {""} text = {''}/>*/}

                </S_Flex>
            </S_Container>
        </S_OrderModal>);
};


