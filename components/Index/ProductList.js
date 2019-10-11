import { Card } from 'semantic-ui-react';
import { Button } from 'reactstrap';
import Router from 'next/router';
import styled from 'styled-components';

const CartButton = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 20px 0;

  button {
    width: 15%;
    padding: 1.3rem 0.75rem;
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    box-shadow: -4px 8px 20px #00000050;
  }
`;

const ProductList = ({ products }) => {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: 'blue',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }));
  }

  return (
    <>
      <Card.Group
        stackable
        itemsPerRow='3'
        centered
        items={mapProductsToItems(products)}
      />
      <CartButton>
        <Button color='primary'>Browse</Button>
      </CartButton>
    </>
  );
};

export default ProductList;
