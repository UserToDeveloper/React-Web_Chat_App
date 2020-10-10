import i18n from "i18next";
import detect from "i18next-browser-languagedetector";
import { initReactI18next} from "recat-i18next";

import translionGr from './locales/gr/translation.json';
import translationIT from './locales/it/translation.json';
import translationSP from './locales/sp/translation.json';
import translationRS from './locales/rs/translation.json';
import translationENG from './locales/eng/translation.json';

//translation
const resources = {
    gr : {
        translation: translionGr
    },
    it : {
        translation: translationIT
    },
    sp : {
        translation: translationSP
    },
    rs : {
        translation: translationRS
    },
    eng : {
        translation: translationENG
    }

}

i18n
     .use(detetctor)
     .use(initReactI18next)
     .init(
         {
             resources,
             lng: 'en',
             fallbackLng: 'en', // use en if detecated ln is not Available

             keySeparator: 'false', // we don not use keys in form messages.welcome

             interpolation: {
                 ecsapvalue: 'false' // react alredy safes from xss             }
         }
        });

 export default i18n;

