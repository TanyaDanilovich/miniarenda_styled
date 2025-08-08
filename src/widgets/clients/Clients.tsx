
import {S_Clients} from './S_Clients';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ClientsSwiper} from './ClientsSwiper/ClientsSwiper';



type props = {};
export const Clients = ({}: props) => {
    const swiperId = "clientsSwiper";

    return (
        <S_Clients>


            <SectionTitle title = {"Работаем с частными лицами и организациями"} text = {''}/>
            <ClientsSwiper id = {swiperId}/>

        </S_Clients>);
};


