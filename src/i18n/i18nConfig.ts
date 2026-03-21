import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translation_es } from './translations/en';



i18n
    .use(initReactI18next)
    .init({
        lng: 'es',
        fallbackLng: 'es',
        interpolation:{
            escapeValue: false
        },
        resources: {
         es: {
            translation: translation_es 
         },
        //  en: {
        //     translation: translation_en
        //  }

         
        }
    });

export default i18n;