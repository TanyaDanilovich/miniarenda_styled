import {S_ContactUs} from './S_ContactUs';


type props = {title?:string};
export const ContactUsButton = ({title="Заказать"}: props) => {

    return (
        <S_ContactUs href={"tel:+375296949698"}>
            {/*<span>Позвонить</span>*/}
            <span>{title}</span>
        </S_ContactUs>);
};

