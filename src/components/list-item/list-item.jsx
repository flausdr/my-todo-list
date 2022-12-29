import { useDispatch, useSelector } from 'react-redux';
import { removeCard, addItemForCard } from '../cardSlice/cardSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import Sortable from 'sortablejs';
import { ReactComponent as AddPlus } from '../../assets/img/addPlus.svg';
import { ReactComponent as CloseItem } from '../../assets/img/closeItem.svg';

import Item from '../item/item';

import './list-item.scss';

const ListItem = ({ id }) => {
    const cards = useSelector((state) => state.counter),
        dispatch = useDispatch(),
        cardsMap = new Map(cards),
        arrMap = cardsMap.get(id)

    useEffect(() => {
        const el = document.querySelectorAll('.item__list')
        el.forEach(e => {
            new Sortable(e, {
                group: 'shared',
                animation: 150,
                ghostClass: 'blue-background-class',
                touchStartThreshold: 3
            })
        })
    }, [])

    return (
        <li className='item' data-id={id}>
            <input type="text" placeholder='Title..' className='item__title' />
            <ul className='item__list'>
                {
                    arrMap.map(item => {
                        return <Item key={item.id} cardId={id} id={item.id} />
                    })
                }
            </ul>
            <span className='plus' onClick={() => dispatch(addItemForCard({cardId: id, id: nanoid(), text: ''}))}>
                <AddPlus />
            </span>
            <span className='close' onClick={() => dispatch(removeCard(id))} >
                <CloseItem />
            </span>
        </li>
    )
}

export default ListItem;