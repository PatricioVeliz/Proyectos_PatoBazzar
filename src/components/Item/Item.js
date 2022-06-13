import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    const {name, price, description, img, stock, id} = product;
    return(
        <div className="Container">
            <div className="Card">
                <img className='imagenes' src={img}></img>
                <h3>{name}</h3>
                <p>{price}</p>
                
                <Link to={`/detail/${id}`}>Detalle</Link>
                <ItemCount initial={1} stock={stock} />
            </div>
        </div>
    )
}

export default Item