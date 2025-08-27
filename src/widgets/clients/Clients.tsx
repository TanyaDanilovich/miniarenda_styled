import {S_Clients} from './S_Clients';
import {SectionTitle} from '../../shared/ui/sectionTitle/SectionTitle';
import {ClientsCarousel} from './ClientsSwiper/ClientsCarousel';


export const Clients = () => {

    return (
        <S_Clients>
            <SectionTitle title = {"Работаем с частными лицами и организациями"} text = {''}/>
            <ClientsCarousel/>
        </S_Clients>);
};


