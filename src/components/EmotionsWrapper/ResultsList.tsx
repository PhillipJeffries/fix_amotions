import React from 'react';

import { ItemType } from '../../features/data/dataSlice';

import './Emotions.scss';

const ResultsList = ({values}:{values: ItemType[]}) => {
    return (
        <div className='container'>
            {
                values.map(({ name, value, time, message }) => {
                    return (
                        <div key={time} className='results'>
                            <span>{name}</span>
                            <span>{value.toString()}</span>
                            <span>{time}</span>
                            <span>{message.fieldOne}</span>
                            <span>{message.fieldTwo}</span>
                            <span>{message.fieldThree}</span>
                            <span>{message.fieldFour}</span>
                        </div>
                    )
                })
            }
        </div>)
};

export default ResultsList