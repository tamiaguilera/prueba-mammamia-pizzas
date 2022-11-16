import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import Context from "../context/context.js"

import Ingredients from "../components/Ingredients.jsx"
import { formatPrice } from "../utils/utils.js"

const Pizza = ()=>{
    const { id } = useParams()
    const { menu } = useContext(Context)

    const [pizza, setPizza] = useState({ingredients: [],price: 0})

    useEffect(()=>{
        const pizza = menu.filter((item)=> item.id === id)
        setPizza(pizza[0])
      }, [])


return(
        <main>
            <div className="pizza-view" >
                <section className="image"  style={{backroundImage: `url(${pizza.img})`}}>
                </section>
                <article className="content" >
                    <h4>{pizza.name}</h4>
                    <p className="desc" >{pizza.desc}</p>

                    <Ingredients ingredients={pizza.ingredients} ></Ingredients>
                        <div className="price-row" >
                            <h3>Precio: ${ formatPrice(pizza.price ? pizza.price : 0)}</h3>

                            <button className="btn btn-primary" > Añadir</button>

                        </div>

                </article>
            </div>

        </main>

    )

}

export default Pizza