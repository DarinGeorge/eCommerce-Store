import styled from 'styled-components';
import { Item, Label } from 'semantic-ui-react';
import { Container, Row, Col, Button } from 'reactstrap';
import AddProductToCart from './sub/AddProductToCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Floater = styled.div`
  position: fixed;
  top: 30%;
  right: 7em;
  width: 350px;
  z-index: 2;
`;

const Reviews = styled.span`
  opacity: 0.7;
  text-transform: uppercase;
  margin-left: 10px;
  font-size: 13px;
  letter-spacing: 2px;
`;

const ProductName = styled.p`
  font-size: 38px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 20px 0;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 20px 0;
`;

const ProductOptions = styled.select`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 5px 0;
  outline: 0;
  background-color: #f1f1f1;
  border: none;
  padding: 15px 40px 15px 16px;
  border-radius: 5px;
  appearance: none;
  width: 100%;
`;

const OptionsLabel = styled.label`
  position: relative;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 600;
  width: 100%;
  margin: 40px 0 0;

  &:after {
    content: url(/static/caret-down-solid.svg);
    position: absolute;
    width: 10px;
    height: 20px;
    top: 50%;
    right: 20px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #000;
  }

  span {
    opacity: 0.5;
  }

  svg {
    margin-left: 20px;
    width: 26px !important;
    height: 26px;
  }
  @media (max-width: 480px) {
    transform: rotate(-90deg);
  }
`;

const CartTitle = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  margin: 25px 0;
`;

const Summary = styled.div`
  height: 80vh;
`;

const Details = styled.div`
  margin: 55% 0;
`;

const ProductSummary = ({ name, mediaUrl, _id, price, user }) => {
  return (
    <Summary>
      <Row>
        <Col style={{ marginLeft: '-2em' }} xs={12}>
          Home <FontAwesomeIcon icon='long-arrow-alt-right' /> Products{' '}
          <FontAwesomeIcon icon='long-arrow-alt-right' /> {name}
        </Col>
        <Col xs={3}>
          <Details>
            <FontAwesomeIcon icon='star' />
            <FontAwesomeIcon icon='star' />
            <FontAwesomeIcon icon='star' />
            <FontAwesomeIcon icon='star' />
            <FontAwesomeIcon icon={['far', 'star']} />
            <Reviews>Reviews</Reviews>
            <ProductName>{name}</ProductName>
            <ProductPrice>$ {price}</ProductPrice>
          </Details>
        </Col>
        <Col xs={6}>
          <img className='product-img' src={mediaUrl} />
        </Col>
        <Col xs={3}></Col>
        <Floater>
          <Row>
            <Col xs={12}>
              <SocialLinks>
                <span>Share</span>
                <a href='https://facebook.com'>
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
                <a href='https://instagram.com'>
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href='https://pinterest.com'>
                  <FontAwesomeIcon icon={['fab', 'pinterest']} />
                </a>
              </SocialLinks>
            </Col>
            <Col xs={5}>
              <OptionsLabel>
                COLOR
                <ProductOptions>
                  <option value='red'>Wood Brown</option>
                  <option value='blue'>Light Brown (Out of Stock)</option>
                </ProductOptions>
              </OptionsLabel>
            </Col>
            <Col xs={7}>
              <OptionsLabel>
                SIZE
                <ProductOptions>
                  <option value='red'>48x34</option>
                  <option value='blue'>78x40</option>
                </ProductOptions>
              </OptionsLabel>
            </Col>
            <Col xs={12}>
              <CartTitle>SELECTION GUIDE</CartTitle>
              <AddProductToCart
                className='cartButton'
                user={user}
                productId={_id}
              ></AddProductToCart>
            </Col>
          </Row>
        </Floater>
      </Row>
    </Summary>
  );
};

export default ProductSummary;
