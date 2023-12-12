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

import { useState } from "react";
import "./App.css";
import CountryCard from "./CountryCard/CountryCard";

function App() {
  const [countries, setCountries] = useState(
    {
    countryName="Italy"
  flagUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAFVBMVEX///8AkkbOKzcAjTl1tYrdfoPMFyenlKYQAAAAiUlEQVR4nO3PRxEAIAADsDL9S0ZEf1ziIBmttVM7d7YiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyaeQBbt9uqjGyZV0AAAAASUVORK5CYII="
  population="50 Ml"
  capital="Rome"}
  );

  return (
    <>
      <CountryCard
        countryName="Italy"
        flagUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAFVBMVEX///8AkkbOKzcAjTl1tYrdfoPMFyenlKYQAAAAiUlEQVR4nO3PRxEAIAADsDL9S0ZEf1ziIBmttVM7d7YiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyaeQBbt9uqjGyZV0AAAAASUVORK5CYII="
        population="50 Ml"
        capital="Rome"
      />
    </>
  );
}

export default App;
