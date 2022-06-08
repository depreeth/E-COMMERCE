<div className="card h-100 text-center p-4 " key={product?.id}>
                                    <img src={product?.image} className="card-img-top" alt={product?.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product?.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">${product?.price}</p>
                                        <a href="/" className="btn btn-outline-dark">Buy Now</a>
                                    </div>
                                </div>