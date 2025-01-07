import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { EnglandIfomation, VietnameseInfomation } from './LanguageInfomation';
// import HeaderENG from './Locales/Header/HeaderENG.json';
// import HeaderVIE from './Locales/Header/HeaderVIE.json';

export const locales = {
    ENG: EnglandIfomation,
    VIE: VietnameseInfomation,
};

const resources = {
    ENG: {
        // header: HeaderENG,
        // footer: FooterENG,
    },
    VIE: {
        // header: HeaderVIE,
        // footer: FooterVIE,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'VIE',
    ns: ['header', 'footer'],
    interpolation: {
        escapeValue: false,
    },
});
