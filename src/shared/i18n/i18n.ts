import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {ru} from './locales/ru';


//import be from '../../locales/be';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: ru },
            //be: { translation: be },
        },
        lng: 'ru', // язык по умолчанию
        defaultNS: 'translation',
        fallbackLng: 'ru', // если перевод не найден
        interpolation: {
            escapeValue: false, // React сам экранирует HTML
        },
        returnObjects: true,// позволяет возвращать вложенные структуры
        debug: false,
    });

export default i18n;
