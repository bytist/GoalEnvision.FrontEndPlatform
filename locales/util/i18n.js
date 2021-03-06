import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import { TranslationResources } from './resources';

const resources = TranslationResources;

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
