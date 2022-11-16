import CartList from "../components/CartList.jsx"
import { useContext } from "react"
import Context from "../context/context.js"

const Cart = ()=> {
    const { cart } = useContext(Context)
    return(
        <main>
            <div className="cart">
                <h2>Detalles del Pedido</h2>
                {
                    cart.length !== 0 ?
                    <CartList cart={cart} ></CartList>
                    : <p className="empty-cart" > No hay elementos en el carrito</p>
                }
            </div>
        </main>

    )

}
export default Cart