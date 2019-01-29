import React from 'react';

const MainInfo = (props) => {

    return (
        <div className='country_name'>Country name
            <p>{props.name}</p>
            <ul>
                <li>Capiatl: <p>{props.capital}</p></li>
                <li>Population: <p>{props.population}</p></li>
                <li>Area: <p>{props.area}</p></li>
            </ul>
        </div>
    );
};

export default MainInfo;