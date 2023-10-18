import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productActions';
import "./productCard.css"
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        fetchProducts(dispatch)
    },[dispatch])
  return (
    <div className='product'>
      <h2>New <span className='span0'>Product Arrivals</span></h2>
    <div className="product-card-container">
      {products.map((product) => (
      <div className='product-card'>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating.rate}</p>
        <div className="card-price-add">
        <span>Price : ${product.price}</span>
        <Link to={`/product/${product.id}`}>
        <button className= "add-item-btn">
          View More
        </button>
        </Link>
       </div>
      </div>
     ))}
    </div>
    </div>
  )
}

export default ProductCard