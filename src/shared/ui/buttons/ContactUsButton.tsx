import {S_ContactUs} from './S_ContactUs';


type props = {};
export const ContactUsButton = ({}: props) => {

    return (
        <S_ContactUs href={"tel:+375296949698"}>
            {/*<span>Позвонить</span>*/}
            <span>Заказать</span>
        </S_ContactUs>);
};

