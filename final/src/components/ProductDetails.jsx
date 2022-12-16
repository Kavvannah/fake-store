import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Skeleton from "react-loading-skeleton";
import { NavLink } from 'react-router-dom';


const ProductDetails = () => {

    const {id} = useParams();
    const [ProductDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(false);

//useEffect hook
    useEffect(() => {
      const getProduct = async () => {
        setLoading(true);
        const response = await fetch (`https://fakestoreapi.com/products/${id}`);
        setProductDetails(await response.json());
        setLoading(false);
      }
      getProduct();
    }, []);
    

// Loading
const Loading = () => {
    return(
        <>
        <div className="col-md-6">
            <Skeleton height={400}/>
        </div>
        <div className="col-md-6">
            <Skeleton height={50} width={300} />
            <Skeleton height={50} width={300} />
            <Skeleton height={50} width={100} />
            <Skeleton height={170} width={500} />
            <Skeleton height={50} width={200} />
        </div>
        </>
    )
}
// ShowProducts output

const ShowProduct = () => {
    return(
        <>
            <div className="col-md-6 mt-4">
                <img src={ProductDetails.image} alt={ProductDetails.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="text-uppercase text-black-50">
                    {ProductDetails.category}
                </h4>
                <h1 className="display-5">
                    {ProductDetails.rating && ProductDetails.rating.rate}
                    <i className="fa fa-star"></i>
                </h1>
                <h3 className="display-6 fw-bold my-4">
                    $ {ProductDetails.price}
                </h3>
                <p className="lead">
                    {ProductDetails.description}
                </p>
                <NavLink to='' className="btn btn-outline-dark">
                    <i className="fa fa-shopping-bag"> Add to Bag</i>
                </NavLink>
                <NavLink to='/cart' className="btn btn-dark ms-2">
                    <i className="fa fa-shopping-bag"> Go to Bag</i>
                </NavLink>
            </div>
        </>
    )
}

  return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading ? <Loading/> : <ShowProduct />}
            </div>
        </div>
    </div>
  )
}

export default ProductDetails;