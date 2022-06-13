import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({ name, description, price, stock,img }) => {

    return(
        
        <div className="Container">
            <h1>ItemDetail</h1>
            <div className="Card">
            <h2>{name}</h2>
            <img className='imagenes' src={img}></img>
            <p>{price}</p>
            <p>{description}</p>

            <ItemCount initial={1} stock={stock}/>

            </div>
        </div>

    )
}

export default ItemDetail 