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
                            <span>{message.situation}</span>
                            <span>{message.emotions}</span>
                            <span>{message.behaviour}</span>
                            <span>{message.thoughts}</span>
                        </div>
                    )
                })
            }
        </div>)
};

export default ResultsList