import { Row, Col, CardBody } from 'reactstrap';
import styled from 'styled-components';

const Item = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-top: 30px;
`;
const ProductGallery = ({ mediaUrl }) => {
  return (
    <Row>
      <Col xs={9}>
        <Row>
          <Col xs={6}>
            <Item>
              <CardBody>
                <img className='product-img' src={mediaUrl} />
              </CardBody>
            </Item>
          </Col>
          <Col xs={6}>
            <Item>
              <CardBody>
                <img className='product-img' src={mediaUrl} />
              </CardBody>
            </Item>
          </Col>
          <Col xs={12}>
            <Item>
              <CardBody>
                <img className='product-img' src={mediaUrl} />
              </CardBody>
            </Item>
          </Col>
          <Col xs={4}>
            <Item>
              <CardBody>
                <img className='product-img' src={mediaUrl} />
              </CardBody>
            </Item>
          </Col>
          <Col xs={4}>
            <Item>
              <CardBody>
                <img className='product-img' src={mediaUrl} />
              </CardBody>
            </Item>
          </Col>
          <Col xs={4}>
            <Item>
              <CardBody>
                <img className='product-img' src={mediaUrl} />
              </CardBody>
            </Item>
          </Col>
        </Row>
      </Col>
      <Col xs={3}></Col>
    </Row>
  );
};

export default ProductGallery;
