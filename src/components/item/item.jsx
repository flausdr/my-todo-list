import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItemCard } from '../cardSlice/cardSlice';
import { ReactComponent as Close } from '../../assets/img/close.svg';

const Item = (state) => {
    const [text, setText] = useState(''),
        dispatch = useDispatch()

    return (
        <li>
            <textarea type="text" placeholder='New item..' value={text} onChange={(e) => setText(e.target.value)}/>
            <span className='close-item' onClick={() => dispatch(removeItemCard({cardId: state.cardId, itemId: state.id}))}>
                <Close />
            </span>
        </li>
    )
}

export default Item