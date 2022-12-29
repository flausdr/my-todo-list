import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from '../cardSlice/cardSlice';
import Item from '../list-item/list-item';
import { useEffect } from 'react';
import Sortable from 'sortablejs';
import { ReactComponent as Plus } from '../../assets/img/plus.svg';

import './desk.scss';

const Desk = () => {
    const cards = useSelector((state) => state.counter),
        dispatch = useDispatch(),
        randomId = nanoid()

    useEffect(() => {
        const el = document.getElementById('items')
        new Sortable(el, {
            animation: 150,
            ghostClass: 'blue-background-class',
            touchStartThreshold: 3
        })
    }, [])
    return (
        <div className="desk">
            <ul className='list-desk' id='items'>
                {
                    cards.map(card => {
                        return <Item id={card[0]} key={card[0]} />
                    })
                }
            </ul>
            <div className='add-item' onClick={() => dispatch(addCard({id: randomId, obj: {id: randomId, text: ''}}))} >
                <span className="add-new-item">
                    <Plus />
                </span>
                <h3 className='add-text'>Add new card</h3>
            </div>
        </div>
    )
};

export default Desk;