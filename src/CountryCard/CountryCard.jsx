import { useState } from "react";
import "./CountryCard.scss";

export default ({ countryName, flagUrl, population, capital }) => {
  return (
    <>
      <div className="countryCard">
        <h3>{countryName}</h3>
        <figure>
          <img src={flagUrl} alt={`flag ${countryName}`} />
        </figure>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
      </div>
    </>
  );
};
