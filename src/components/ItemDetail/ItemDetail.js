import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({ name, description, price, stock,img }) => {

    const [quantity, setQuantity] = useState(0)

    const hanleOnAdd =(count) =>{
        console.log('agrege al carrito')
        console.log(count)
        setQuantity(count)
    }

    return(
        
        <div className="Container">
            <h1>ItemDetail</h1>
            <div className="Card">
            <h2>{name}</h2>
            <img className='imagenes' src={img}></img>
            <p>{price}</p>
            <p>{description}</p>

            {quantity > 0 ? <Link to='/Cart'>Finalizar compra</Link> : <ItemCount initial={1} stock={stock} onAdd={hanleOnAdd}/>}

            </div>
        </div>

    )
}

export default ItemDetail 