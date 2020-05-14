import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Home from "./components/Home/home";
import Works from "./components/Works/works";
import { IntlProvider } from "react-intl";

import messagesFr from "./assets/translation/fr";
import messagesEn from "./assets/translation/en";
import LanguageContext from "./components/Context/LanguageContext";
import StudyCase from "./components/Works/studycase";

const messages = {
  fr: messagesFr,
  en: messagesEn,
}; // On créé un objet qui contient toutes nos traductions, avec un index par langue

console.log(messages);
console.log(LanguageContext);

const App = () => {
  const [language, setLanguage] = useState("fr");
  //La langue par défaut de notre app (doit correspondre à un des index de la variables messages ci dessus).
  return (
    <LanguageContext.Provider
      value={{
        language,
        setEN: () => setLanguage("en"),
        setFR: () => setLanguage("fr"),
      }}
    >
      <Router>
        <div className="container">
          <IntlProvider locale={language} messages={messages[language]}>
            <Navbar />
            <div className="mt-5">
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route exact path="/works">
                  <Works />
                </Route>
                <Route path={`/works/:clientSlug`}>
                  <StudyCase />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </IntlProvider>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
