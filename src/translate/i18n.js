import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ruJson from "./ru";
import kgJson from "./kg";
import enJson from "./en";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			EN: {
				translation: enJson,
			},
			RU: {
				translation: ruJson,
			},
			KG: {
				translation: kgJson,
			},
		},
		lng: "EN",
		fallbackLng: "EN",

		interpolation: {
			escapeValue: false,
		},
	});
export default i18n;
