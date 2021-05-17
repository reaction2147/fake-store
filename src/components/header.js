import React from "react"
import {Link} from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
return(
    <nav className="menu">
        <h2>Logo</h2>
        <ul className="menu-links">
            <Link className="menu-style" to="/"><li>Home</li></Link>
            <Link className="menu-style" to="/about"><li>About</li></Link>
            <Link className="menu-style" to="/shop"><li>Shop</li></Link>   
             </ul>
    </nav>
)

}


export default Header