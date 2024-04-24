import Provider from "./i18n/Provider";
import Translate from "./i18n/Translate";
import { useState } from "react";
import { LOCALES } from "./i18n/locale";
import "./App.scss";

export default function App() {
  const [languages, setLanguages] = useState(LOCALES.ENGLISH);
  const handleChange = (e) => {
    setLanguages(LOCALES[e.target.value]);
  };
  return (
    <Provider locale={languages}>
      <div className="App">
        <div className="App__items">
          <h2 className="App__title">{Translate("title")}</h2>
          <p className="App__description">{Translate("firstdesc")}</p>
          <p className="App__description">{Translate("seconddesc")}</p>
        </div>
        <div className="App__select">
          <select name="language" id="language" onChange={handleChange}>
            {Object.keys(LOCALES).map((elem) => {
              return (
                <option key={elem} value={elem}>
                  {LOCALES[elem]}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </Provider>
  );
}
