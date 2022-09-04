import { useEffect, useState } from "react"
import Item from "./Item"

const ItemList = () => {

    
    const [products, setProducts] = useState([])


  useEffect( () => {

    const getProducts = new Promise ((resolve, reject) => {
      const rand = Math.random()
      console.log(rand)

      if (rand > 0.1 ) {
        resolve([
            { id: 1, title: 'Galon Pintura', price: 500, picture: <img src="https://placeimg.com/400/225/arch" className="rounded-xl w-13 h-12"></img>},
            { id: 2, title: 'Brocha', price: 100, picture: <img src="https://placeimg.com/400/225/arch" className="rounded-xl w-13 h-12"></img>},
            { id: 3, title: 'Rodillo', price: 200, picture: <img src="https://placeimg.com/400/225/arch" className="rounded-xl w-13 h-12"></img>}
        ])
      } else {
        reject('Promesa Rechazada')
      }    
  
    })

    setTimeout( () => {
    getProducts
           .then( (data) => {
            console.log(data)
            setProducts(data)
          })
          .catch ( (err) => {console.log(err)} )},2000)
   
  },[])


  return (
  
    <div>

    {products.map(p => <lu key={p.id}>{p.id}. {p.title} $ {p.price} {p.picture}</lu>)}

    </div>
  )
}
export default ItemList