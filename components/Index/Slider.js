import { Component } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Button } from 'reactstrap';

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

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        left: '63px',
        top: '25%',
        display: 'block',
        zIndex: '2'
      }}
      onClick={onClick}
    >
      <img
        style={{ width: '30px', height: '30px' }}
        src='/static/chevron-circle-right-solid.svg'
      />
    </div>
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        left: '63px',
        top: '65%',
        zIndex: '2'
      }}
      onClick={onClick}
    >
      <img
        style={{ width: '30px', height: '30px' }}
        src='/static/chevron-circle-left-solid.svg'
      />
    </div>
  );
};

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      customPaging: customDots => <div className='dot-cont'></div>
    };
    return (
      <div className='slider-container'>
        <style jsx>
          {`
            .slider-container {
              position: relative;
              margin-left: -98px;
              margin-right: -98px;
              margin-bottom: 40px;
              margin-top: -20px;
            }
            .slide-holder {
              position: relative;
            }
            .slide-content {
              position: absolute;
              top: 40%;
              left: 18%;
            }
            .slide-content span {
              font-size: 46px;
            }
            .slide-content p {
              font-size: 22px;
            }
          `}
        </style>
        <Slider {...settings}>
          <div className='slide-holder'>
            <img src='/static/banner.jpeg' />
            <div className='slide-content'>
              <span>Addy Alldre</span>
              <p>New Style. Same Comfort.</p>
              <CartButton>
                <Button color='primary'>ADD TO CART</Button>
              </CartButton>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
