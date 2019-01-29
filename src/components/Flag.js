import React from 'react';

const Flag = (props) => {
    return (
        <div className='flag_div'>
            <img className='flag_img' src={props.url} alt='country flag' />
        </div>
    );
};

export default Flag;