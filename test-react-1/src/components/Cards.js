import React from "react";

const Cards = ({country}) => {
    return (
        <li className="card">
            
            <h2>{country.translations.fra.common}</h2>
            <img src={country.flags.svg} alt={"drapeau" + country.translations.fra.common}/>

        </li>
    );
}
export default Cards;