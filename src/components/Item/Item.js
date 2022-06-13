import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    const {name, price, img, id} = product;
    return(
        <div className="Container">
            <div className="Card">
                <img className='imagenes' src={img}></img>
                <h3>{name}</h3>
                <p>{price}</p>
                
                <Link to={`/detail/${id}`}>Detalle</Link>
                
            </div>
        </div>
    )
}

export default Item