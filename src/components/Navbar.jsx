import { Link } from "react-router-dom"

const Navbar = ()=> {
    return (

        <nav className="main-nav">
            <Link to="/"> <h3> <i className="fa-solid fa-pizza-slice"></i>Mamma Mia!</h3> </Link>
            <Link to="/carrito"> <i className="fa-regular fa-cart-shopping">$0</i></Link>
        </nav>
    )
}

export default Navbar 