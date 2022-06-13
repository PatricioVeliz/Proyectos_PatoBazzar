import './NavBar.css'
/* import CartWidget from '../CartWidget/CartWidget' */
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav__b">
            
            <h1 className="nav__title"><a href="#">PatoBazzar</a></h1>
            
            {/* <button><a className="nav__btn" href="#">HOME</a></button>
            <button><a className="nav__btn" href="#">Utensilios de cocina</a></button>
            <button><a className="nav__btn" href="#">Jardineria</a></button>
            <button><a className="nav__btn" href="#"><CartWidget /></a></button> */}


            <Link to='/' className="nav__btn">Inicio</Link>
            <Link to='/category/utensilios de cocina' className="nav__btn">Utensilios de cocina</Link>
            <Link to='/category/jardin' className="nav__btn">Jardineria</Link>
            
        </nav>
        

    )
}
export default NavBar 