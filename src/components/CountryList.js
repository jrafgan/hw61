import React from 'react';

const CountryList = (props)=> {

        return (<div className='country_list'>
                    <p className='list_p'>List of Countries</p>
                    <ul>
                        {props.array.map((item, key) => {
                            return <li id={key} key={key} onClick={event => props.onClick(event)}>{item}</li>
                        })}
                    </ul>
                </div>
        );
}

export default CountryList;