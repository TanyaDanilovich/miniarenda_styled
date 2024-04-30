import React from 'react';
import {S_OrderModal} from './S_OrderModal';
import {Container} from '../../shared/styled/Container';
import {Button} from '../../shared/ui/button/Button';
import {S_Flex} from '../../shared/styled/S_Flex';


type props = {};
export const OrderModal = ({}: props) => {

    return (
        <S_OrderModal>

            <Container>
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
            </Container>
        </S_OrderModal>);
};


