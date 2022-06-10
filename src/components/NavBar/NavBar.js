import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="nav__b">
            
            <h1 className="nav__title"><a href="#">PatoBazzar</a></h1>
            
            <button><a className="nav__btn" href="#">HOME</a></button>
            <button><a className="nav__btn" href="#">Utensilios de cocina</a></button>
            <button><a className="nav__btn" href="#">Jardineria</a></button>
            <button><a className="nav__btn" href="#"><CartWidget /></a></button>
            
        </nav>
        

    )
}
export default NavBar 