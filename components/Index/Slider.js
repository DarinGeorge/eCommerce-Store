import { Component } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
      <img style={{ width: '30px', height: '30px' }} src='/static/chevron-circle-right-solid.svg'/>
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
      <img style={{ width: '30px', height: '30px' }} src='/static/chevron-circle-left-solid.svg'/>
    </div>
  );
};

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      customPaging: customDots => (
        <div 
          className='dot-cont'
          >

            </div>
      )
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
            }
            .slide-holder {
              position: relative;
            }
            .slide-content {
              position: absolute;
              top: 50%;
              left: 50%;
            }
          `}
        </style>
        <Slider {...settings}>
          <div className='slide-holder'>
            <img src='http://placekitten.com/g/1920/700' />
            <div className='slide-content'>
              <p>Slider Title</p>
              <p>Slider Text</p>
            </div>
          </div>
          <div className='slide-holder'>
            <img src='http://placekitten.com/g/1920/700' />
            <div className='slide-content'>
              <p>Slider Title</p>
              <p>Slider Text</p>
            </div>
          </div>
          <div className='slide-holder'>
            <img src='http://placekitten.com/g/1920/700' />
            <div className='slide-content'>
              <p>Slider Title</p>
              <p>Slider Text</p>
            </div>
          </div>
          <div className='slide-holder'>
            <img src='http://placekitten.com/g/1920/700' />
            <div className='slide-content'>
              <p>Slider Title</p>
              <p>Slider Text</p>
            </div>
          </div>
          <div className='slide-holder'>
            <img src='http://placekitten.com/g/1920/700' />
            <div className='slide-content'>
              <p>Slider Title</p>
              <p>Slider Text</p>
            </div>
          </div>
          <div className='slide-holder'>
            <img src='http://placekitten.com/g/1920/700' />
            <div className='slide-content'>
              <p>Slider Title</p>
              <p>Slider Text</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
