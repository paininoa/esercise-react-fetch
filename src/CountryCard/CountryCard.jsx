import { useState } from "react";
import "./CountryCard.scss";

export default ({ countryName, flagUrl, population, capital }) => {
  return (
    <>
      <div className="countryCard">
        <h2>{countryName}</h2>
        <figure>
          <img src={flagUrl} alt={`flag ${countryName}`} />
        </figure>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
      </div>
    </>
  );
};
