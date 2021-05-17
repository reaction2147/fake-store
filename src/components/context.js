import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

   //Code to fetch data from the API
const [items, setItems] = useState([])

const fetchItems = async() => {
    const data = await fetch("https://fakestoreapi.com/products?limit=20");
    const items = await data.json();
    setItems(items)
    
}
// Run function on mount
 
useEffect(() => {
    fetchItems();
  }, []);


    return (
        <Context.Provider value={{items}} > 
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 