import React, { useState, useEffect } from 'react'
import Products from './Products';
import axois from 'axios';
import styled from 'styled-components';

function ProductList() {

    const [items, setitems] = useState([]);

    useEffect(() => {
        axois.get('http://localhost:8000/')
            .then(res => {
                console.log(res.data.data.products);
                setitems(res.data.data.products)
            }).catch(err => {
                console.log("Error", err);
            })
    }, [])

    return (
        <Container>
            <div className='container'>
                <Head>Messoldtech Store</Head>
                <Row className='row'>
                    {items.map((item) => (
                        <Products key={item.id} item={item} />
                    ))}
                </Row>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background-color: #b6d0d0;
`;

const Head = styled.h1`
    font-weight: 700;
    font-size: 50px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin-left: 25px;
    margin-top: 20px;
`;

export default ProductList