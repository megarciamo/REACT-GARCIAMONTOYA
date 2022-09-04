import ItemCount from "./ItemCount"

const Item = ({title, price}) => {
    
    return (
        <> 
        <div className="grid grid-cols-3" >
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
      <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
          <h2 className="card-title"> {title} </h2>
        <p>{price}</p>
        <div className="card-actions">
        <ItemCount stock={10} initial={1}/>
          <button className="btn btn-primary items-center">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
export default Item