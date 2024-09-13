import React from 'react';
import {S_OrderModal} from './S_OrderModal';
import {S_Container} from '../../shared/styled/S_Container';
import {S_Flex} from '../../shared/styled/S_Flex';
import {ContactUsButton} from '../../shared/ui/linkAsButton/ContactUsButton';


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
                        <ContactUsButton/>
                    </div>
                    {/*<SectionTitle title = {""} text = {''}/>*/}

                </S_Flex>
            </S_Container>
        </S_OrderModal>);
};


