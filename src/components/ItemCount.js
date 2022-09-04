import { useState } from "react"

const ItemCount = ( {stock, initial} ) => {
  

    const [counter, setCounter] = useState(initial)
 
    console.log(counter)
    console.log(stock)

      const onAdd = () => {
        console.log('Hiciste click')
        if (counter < stock ) {
            setCounter(counter + 1)         
          } else {
            setCounter(counter )
          } 
      }

      const onSub = () => {
        console.log('Hiciste click')
        if (counter > 0 ) {
            setCounter(counter - 1)         
          } else {
            setCounter(counter )
          } 
      }


    return (
    <>  
   
    <strong className ='my-3'>Stock: {stock}</strong>
    <button onClick={onAdd} className='btn mx-5 my-50'>+</button>
    <strong className ='my-3'> {counter}</strong>
    <button onClick={onSub} className='btn mx-5 my-50'>-</button>

    </>
  )
}
export default ItemCount