import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { ItemType } from '../../features/data/dataSlice';
import { addNote } from '../../features/data/dataSlice'

import ResultsList from './ResultsList';
import HistoryList from './HistoryList';
import MessageForm from './MessageForm';

import { emotionsData } from './emotionsData';

import './Emotions.scss';




const Emotions = () => {
    const dispatch = useDispatch()
    const [emotions, setEmotions] = useState(emotionsData)
    const data = useSelector((state: RootState) => state.data)

    const [values, setValues] = useState<ItemType[]>(data)
    const [currentValues, setCurrentValues] = useState<ItemType[]>([])
    const [name, setName] = useState('')
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState({situation: '', thoughts: '', emotions: '', behaviour: ''})
    const [showHistory, setShowHistory] = useState(false)

    const toggleMessageVisability = (id: number) => {
        const index = emotions.findIndex((emo) => emo.id === id)
        console.log(id, index)
        emotions[index].showMessage = !emotions[index].showMessage
        // emotions.forEach(item => item.showMessage = false);
        setEmotions(emotions)
    }

    const toggleHistory = () => {
        setShowHistory(!showHistory)
    }



    const handleClick = (event: any) => (id: number) => {
        setName(event.target.name)
        setValue(event.target.value)
        toggleMessageVisability(id)
    }


    const handleSubmit = (id: number) =>{
        if (Object.values(message).every(m => m !=='')) {
            setCurrentValues([...currentValues, {name: name, value: value, message: message}])
            dispatch(addNote({ name: name, value: value, message: message}))
            setValues([...values, {name: name, value: value, message: message}])
            toggleMessageVisability(id)
        }
        
    };

    return (
        <div className='Emotions'>
            <div className='emotions-wrapper container'>
                <h1>What are you feeling now?</h1>
                {emotions.map(({ id, name, color, showMessage }) => {
                    return (
                        <div className='emotion-item' key={id}>
                            <span className='emotion-title' style={{ color: color }}>{name}</span>
                            <input onTouchEnd={(e)=>handleClick(e)(id)} onMouseUp={(e)=>handleClick(e)(id)} name={name} type='range'></input>
                            {
                                showMessage && 
                                <MessageForm closeMessage={()=>toggleMessageVisability(id)} message={message} onChange={(e) => {setMessage({...message, [e.currentTarget.id] : e.currentTarget.value})}} sendMessage={() => handleSubmit(id)} />
                            }
                        </div>)
                })}
                <button type='button' onClick={toggleHistory}>{showHistory ? 'Hide History' : 'Show History'}</button>
            </div>
            {(Boolean(currentValues.length) && !showHistory) &&
                <ResultsList values={currentValues} />
            }
            {Boolean(values.length) && showHistory &&
                <div>
                    <HistoryList hideHistory={toggleHistory} values={values} />
                </div>
            }
        </div>)
};

export default Emotions