
import {S_OrderModal} from './S_OrderModal';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {S_Flex} from '../../shared/styled/S_Flex';
import {ContactUsButton} from '../../shared/ui/buttons/ContactUsButton';


type props = {};
export const OrderModal = ({}: props) => {

    return (
        <S_OrderModal>

            <S_OuterContainer>
                <S_Flex>
                    <div>
                        <p>
                            Доставим мини-&#8288;технику по Минску и Минской области
                        </p>
                    </div>
                    <div>
                        <ContactUsButton/>
                    </div>
                    {/*<SectionTitle title = {""} text = {''}/>*/}

                </S_Flex>
            </S_OuterContainer>
        </S_OrderModal>);
};


