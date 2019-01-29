import React from 'react';
import Flag from "./Flag";
import MainInfo from "./MainInfo";
import BorderCountries from "./BorderCountries";

const InfoItems = props => {

    return (<div className='country_info'>
        <MainInfo
                name={props.obj.name}
                capital={props.obj.capital}
                population={props.obj.population}
                area={props.obj.area}

            />
        <Flag url={props.obj.flag}/>
        <BorderCountries borders={props.obj.borders}/>
    </div>)
};


export default InfoItems;