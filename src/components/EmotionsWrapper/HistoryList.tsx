import React from 'react';

import { ItemType } from '../../features/data/dataSlice';

import './Emotions.scss';

const HistoryList = ({values, hideHistory}:{values: ItemType[], hideHistory: () => void}) => {
    return (
        <div className='container history'>
            {
                values.map(({ name, value, time, message }) => {
                    return (
                        <div key={time} className='history_item'>
                            <div className='title_block'>
                                <h4>{name}</h4>
                                <span>{value.toString()}</span>
                                <span>{time}</span>
                            </div>
                           <div className='message_block'>
                                {Object.entries(message).map(([k, v])=> {
                                    return (
                                        <div key={k} className='message_item'>
                                            <h5>{k}</h5>
                                            <span>{v}</span>
                                        </div>
                                    )
                                })}
                           </div>
                        </div>
                    )
                })
            }
            <button type='button' onClick={hideHistory}>close</button>
        </div>)
};

export default HistoryList