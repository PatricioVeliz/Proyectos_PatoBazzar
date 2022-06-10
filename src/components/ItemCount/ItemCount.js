import './ItemCount.css'
import { useState, useEffect } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const Increment = () => {
        if (count < stock)
        setCount (count + 1);
    }

    const Descrement = () =>{
        if(count > initial)
        setCount(count - 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])

    return (
        <div className="tem__contador">
            <button className="carrito_btn" onClick={Descrement}><i className="bi bi-cart-dash-fill"></i></button>
            <span className="carrito_btn">{count}</span>
            <button className="carrito_btn" onClick={Increment}><i className="bi bi-cart-plus-fill"></i></button>
            <div>
                <button className="carrito_btn" disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount