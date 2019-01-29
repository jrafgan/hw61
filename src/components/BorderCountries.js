import React, {Fragment} from 'react';

const BorderCountries = props => {

    return (
            <Fragment>
                <div>Borders
                    {props.borders.length !== 0 ? <ul>
                        {props.borders.map((item, index)=> {
                            return <li key={index}>{item}</li>
                        })}
                    </ul> : <p>No border countries</p>}
                </div>
            </Fragment>
        )
};


export default BorderCountries;