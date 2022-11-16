import { formatPrice } from "../utils/utils.js"
import { Link } from "react-router-dom"

const CartList = ({ cart })=>{
    return(
       <div>
            <ul>
                {
                    cart.map((item)=> {
                        return(
                            <li key={item.id}>
                                <div className="product">
                                    <img src={item.img} alt={item.name} />
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="price">
                                    <h4>${formatPrice(item.price)}</h4>
                                    <div className="btns">
                                        <button  className="btn btn-primary"> - </button>
                                        <p className="bold">1</p>
                                        <button className="btn btn-secondary" >+</button>

                                    </div>

                                </div>

                            </li>
                        )
                    })

                }

            </ul>
            <div className="total" >
                <h3>Total: $0</h3>
                <Link to="/pagar" className="btn  btn-primary" >Ir a pagar</Link>

            </div>

       </div>


    )

}


export default CartList