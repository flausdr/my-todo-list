import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from '../cardSlice/cardSlice';
import Item from '../list-item/list-item';

import './desk.scss';

const Desk = () => {
    const cards = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const randomId = nanoid()

    return (
        <div className="desk">
            {
                cards.map(card => {
                    return <Item id={card[0]} key={card[0]} />
                })
            }
            <div className='add-item' onClick={() => dispatch(addCard({id: randomId, obj: {id: randomId, text: ''}}))} >
                <span className="add-new-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                </span>
                <h3 className='add-text'>Add new card</h3>
            </div>
        </div>
    )
};

export default Desk;