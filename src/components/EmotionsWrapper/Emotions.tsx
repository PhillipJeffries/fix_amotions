import React from 'react';
import './Emotions.scss';

const emotionsData = [
    {id: 1, name: 'Joy', color: '#FFE366'},
    {id: 2, name: 'Sadness', color: '#2962A7'},
    {id: 3, name: 'Fear', color: '#8B6DA7'},
    {id: 4, name: 'Anger', color: '#CA282A'},
    {id: 5, name: 'Disgast', color: '#3B7137'},
    {id: 6, name: 'Embarrasment', color: '#DC7394'},
    {id: 7, name: 'Nostalgia', color: '#B98B7F'},
    {id: 8, name: 'Ennui', color: '#5F66BA'},
    {id: 9, name: 'Envy', color: '#22757D'},
    {id: 10, name: 'Enxiety', color: '#E6742D'},
]

const Emotions = () => (
    <div className='Emotions'>
        <h1>What are you feeling now?</h1>
        {emotionsData.map(({id, name, color}) => {
            return (
            <div key={id} className='emotion-item'>
                <span style={{color: color}}>{name}</span>
                <input type='range'></input>
            </div>)
        })}
    </div>
);

export default Emotions