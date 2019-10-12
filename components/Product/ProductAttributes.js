import React from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Title = styled.div`
  font-weight: 700;
  color: #000;
  width: 100%;
  margin: 30px 0 15px 0;
`;

const ProductAttributes = ({ description, _id, user }) => {
  const [modal, setModal] = React.useState(false);
  const router = useRouter();
  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  async function handleDelete() {
    const url = `${baseUrl}/api/product`;
    const payload = { params: { _id } };
    await axios.delete(url, payload);
    router.push('/');
  }

  return (
    <Row>
      <Col xs={12} md={12} lg={9}>
        <Title>About this product</Title>
        <p>{description}</p>
        {isRootOrAdmin && (
          <>
            <Button color='danger' onClick={() => setModal(true)}>
              Delete Product
            </Button>
            <Modal isOpen={modal} dimmer='blurring'>
              <ModalHeader>Confirm Delete</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this product?</p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' onClick={handleDelete} content='Cancel'>
                  Delete
                </Button>
                <Button onClick={() => setModal(false)}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </>
        )}
      </Col>
    </Row>
  );
};

export default ProductAttributes;
