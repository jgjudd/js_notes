import * as React from "react";

const translations = {
  en: {
    hello: "Hello!",
    welcome: "Welcome to our app!",
  },
  es: {
    hello: "¡Hola!",
    welcome: "¡Bienvenido a nuestra aplicación!",
  },
  fr: {
    hello: "Bonjour !",
    welcome: "Bienvenue dans notre application !",
  },
  de: {
    hello: "Hallo!",
    welcome: "Willkommen in unserer App!",
  },
};

const languageContext = React.createContext({
  language: "en",
  changeLanguage: () => {},
  translation: (key) => key,
});

function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const translation = (lang) => {
    return translations[lang];
  };

  return (
    <languageContext.Provider value={{ language, changeLanguage, translation }}>
      {children}
    </languageContext.Provider>
  );
}

function LanguageSwitcher() {
  const { language, changeLanguage } = React.useContext(languageContext);

  return (
    <div>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}

function Greeting() {
  const { language, translation } = React.useContext(languageContext);
  const hello = translation(language).hello;
  const welcome = translation(language).welcome;

  return (
    <div>
      <h1>{hello}</h1>
      <p>{welcome}</p>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Greeting />
    </LanguageProvider>
  );
}
