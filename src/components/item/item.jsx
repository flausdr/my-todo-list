import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItemCard } from '../cardSlice/cardSlice';

const Item = (state) => {
    const [text, setText] = useState(''),
        dispatch = useDispatch()

    return (
        <li>
            <textarea type="text" placeholder='New item..' value={text} onChange={(e) => setText(e.target.value)}/>
            <span className='close-item' onClick={() => dispatch(removeItemCard({cardId: state.cardId, itemId: state.id}))}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </span>
        </li>
    )
}

export default Item