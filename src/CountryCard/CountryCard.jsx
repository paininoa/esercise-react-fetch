import { useState } from "react";
import "./CountryCard.scss";

export default ({ countryName, flagUrl, population, capital }) => {
  return (
    <>
      <div className="countryCard">
        <figure>
          <img src={flagUrl} alt={`flag ${countryName}`} />
        </figure>
        <h3>{countryName}</h3>

        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
      </div>
    </>
  );
};
