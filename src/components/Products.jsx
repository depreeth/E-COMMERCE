import React, { useEffect, useState } from 'react'

const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let compMount = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (compMount) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                compMount = false;

            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">ALL</button>
                    <button className="btn btn-outline-dark me-2">MEN's CLOTHING</button>
                    <button className="btn btn-outline-dark me-2">WOMEN's CLOTHING</button>
                    <button className="btn btn-outline-dark me-2">Jewelery</button>
                    <button className="btn btn-outline-dark me-2">Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div>
                                    {/* <h2>{product?.category}</h2> */}
                                <div className="card h-100 text-center p-4 " key={product?.id}>
                                    <img src={product?.image} className="card-img-top" alt={product?.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product?.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">${product?.price}</p>
                                        <a href="/" className="btn btn-outline-dark me-2 m-1">Buy Now</a>
                                        <a href="/" className="btn btn-outline-warning me-2 m-1">Add To Cart</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products