// 1. Crea un componente CountryCard che accetta come props countryName, flagUrl, population, capital.
// Il componente crea un elemento che rappresenta la card di un paese, con titolo countryName,
// immagine con flagUrl per la bandiera, e le caratteristiche Popolazione e Capitale del paese.

// 2. Crea uno state [countries, setCountries], che rappresenta un array di oggetti,
// ciascuno dei quali viene utilizzato per rappresentare una CountryCard.

// 3. Crea un effetto (useEffect) che al componentDidUpdate effettua una fetch
// a 'https://restcountries.com/v3.1/all' e aggiorna il valore di[countries, setCountries].

// 4. Crea uno state [searchValue, setSearchValue] legato ad un componente SearchBar che accetta
// come props value, onChange, onSearch.
// Il componente rappresenta un contenitore con dentro:

// - un input text per il campo di ricerca: Il prop 'value' rappresenta il valore corrente
// da passare all'input. All'evento onChange dell'input text, viene eseguita la funzione
// onChange (passata come prop), a cui viene passato il valore corrente dell'input.

// - un bottone 'Cerca': Al click del bottone cerca, viene eseguita la funzione onSearch (passata come prop).

// All'onChange di SearchBar, modifica lo state 'searchValue' con il valore corrente passato ad onChange dal componente.

// 5. Allo scaternarsi di onSearch, effettua una nuova fetch a https://restcountries.com/v3.1/name/{searchValue}
// e aggiorna il contenuto dello state [countries, setCountries], con il risultato della ricerca.

import { useState, useEffect } from "react";
import "./App.css";
import CountryCard from "./CountryCard/CountryCard";

function App() {
  const testList = [
    {
      country: "Italy(2)",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAFVBMVEX///8AkkbOKzcAjTl1tYrdfoPMFyenlKYQAAAAiUlEQVR4nO3PRxEAIAADsDL9S0ZEf1ziIBmttVM7d7YiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyaeQBbt9uqjGyZV0AAAAASUVORK5CYII=",
      population: "50 Ml",
      capital: "Rome",
    },
    {
      country: "Spain(2)",
      flag: "data:image/png;base64,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",
      population: "40 Ml",
      capital: "Madrid",
    },
  ];

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
        setCountries(obj);
      });
  }, []);

  return (
    <>
      <div className="cardsWrapper">
        {countries.map((e, i) => {
          return (
            <CountryCard
              key={`${i}${e.name.official}`}
              countryName={e.name.official}
              flagUrl={e.flags.svg}
              population={e.population}
              capital={e.capital}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
