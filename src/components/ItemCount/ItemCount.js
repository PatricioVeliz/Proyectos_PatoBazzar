import './ItemCount.css'
import { useState } from 'react';

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);

    const Increment = () => {
        if (count < stock)
        setCount (count + 1);
    }

    const Descrement = () =>{
        if(count > initial)
        setCount(count - 1);
    }

    return (
        <div className="tem__contador">
            <button className="carrito_btn" onClick={Descrement}><i className="bi bi-cart-dash-fill"></i></button>
            <span className="carrito_btn">{count}</span>
            <button className="carrito_btn" onClick={Increment}><i className="bi bi-cart-plus-fill"></i></button>
            <div>
                <button className="carrito_btn">Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount