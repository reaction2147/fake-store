import React, {useContext} from "react"
import {Context} from "../components/context"
import "../styles/Shop.css"

const Shop = () => {

    const {items} = useContext(Context)

    console.log(items)

    return (
        <>
        <h1>Shop</h1>
        <div className="cards-container">
            {items.map((item) => (
                <div key={item.id} className="card-container">
                    <img 
                    alt={item.title}
                    className="item-image"
                    src={item.image}
                    />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
        </>
    )
}


export default Shop