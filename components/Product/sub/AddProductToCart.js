import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { useRouter } from 'next/router';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import catchErrors from '../../../utils/catchErrors';
import cookie from 'js-cookie';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartButton = styled.div`
  width: 100%;

  button {
    width: 100%;
    padding: 1.3rem 0.75rem;
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    box-shadow: -4px 8px 20px #00000050;
    svg {
      margin-left: 20px;
      width: 25px !important;
      height: 25px;
    }
  }
`;

const AddProductToCart = ({ user, productId }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  async function handleAddProductToCart() {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/cart`;
      const payload = { quantity, productId };
      const token = cookie.get('token');
      const headers = { headers: { Authorization: token } };
      await axios.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, window.alert);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CartButton>
      {user ? (
        <Button color='primary' onClick={handleAddProductToCart}>
          {success ? ' Item Added!' : ' Add To Cart'}
          <FontAwesomeIcon icon='shopping-cart' />
        </Button>
      ) : (
        <Button color='warning' onClick={router.push('/signup')}>
          Sign Up To Purchase <FontAwesomeIcon icon='lock' />
        </Button>
      )}
    </CartButton>
  );
};

export default AddProductToCart;
