import './Item.css'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({product}) => {
    const {name, price, description, img, stock} = product;
    return(
        <div className="Container">
            <div className="Card">
                <img className='imagenes' src={img}></img>
                <h3>{name}</h3>
                <p>{price}</p>
                <button><a href="#" src={description}>Detalles</a></button>
                <ItemCount initial={1} stock={stock} />
            </div>
        </div>
    )
}

export default Item