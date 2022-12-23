import { useDispatch, useSelector } from 'react-redux';
import { removeCard, addItemsForCard } from '../cardSlice/cardSlice';
import { nanoid } from '@reduxjs/toolkit';

import Item from '../item/item';

import './list-item.scss';

const ListItem = ({ id }) => {
    const cards = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    const cardsMap = new Map(cards)
    const arrMap = cardsMap.get(id)
    return (
        <li className='item' data-id={id}>
            <input type="text" placeholder='Title..' className='item__title' />
            <ul className='item__list'>
                {
                    arrMap.map(item => {
                        return <Item key={item.id} cardId={id} id={item.id} text={item.text}/>
                    })
                }
            </ul>
            <span className='plus' onClick={() => dispatch(addItemsForCard({cardId: id, id: nanoid(), text: ''}))}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
            </span>
            <span className='close' onClick={() => dispatch(removeCard(id))} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </span>
        </li>
    )
}

export default ListItem;