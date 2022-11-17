import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context"

const Navbar = ()=> {
    const { cartTotal } = useContext(Context)
    
    return (

        <nav className="main-nav">
            <Link to="/"> <h3> <i className="fa-solid fa-pizza-slice"></i>Mamma Mia!</h3> </Link>
            <Link to="/carrito"> <i class="fa-solid fa-cart-shopping">${cartTotal()}</i></Link>
        </nav>
    )
}

export default Navbar 