import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://arcane-cove-15684.herokuapp.com/products')
        .then(res  => res.json())
        .then(data => setProducts(data));

    }, [])

    return (
        <Container>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
        </Container>
        
    );
};

export default Products;