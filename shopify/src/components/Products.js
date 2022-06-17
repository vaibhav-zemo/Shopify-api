import React from 'react';
import styled from 'styled-components';

function Products({ item }) {
  return (
    <Card className="card text-bg-light border-secondary mb-2 productcard">
      <div className='row g-0'>
        <div className='col-md-4'>
          {
            item.image && <img src={item.image.src} className="img-fluid rounded-start" alt="..." />
          }
        </div>
        <div className='col-md-8'>
          <div className="card-body">
            <Title className="card-title">{item.handle}</Title>
            <p className="card-text"><b>Description:</b> {item.title}</p>
            <p className='card-text'><b>Vendor: </b>{item.vendor}</p>
            <p className='card-text'><b>Tags: </b> {item.tags} </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

const Card = styled.div`
  max-width: 540px;
  margin: 10px;

`;

const Title = styled.h2`
  font-weight: 700;
`;

export default Products