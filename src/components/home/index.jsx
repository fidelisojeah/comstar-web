import React from 'react';

import Slider from './Slider';
import Services from '../sections/Services';
import TypedComponent from './typed/TypedComponent';

function HomeSliderSection(props) {
  return (
    <section className="home-slider">
      <Slider />
      <div className="home-slider--container">
        <div className="container">
          <div className="home-slider--title">
            <h1>Comstar Insurance Brokers</h1>
          </div>
          <div className="home-slider--text">
            <TypedComponent
              loop
              strings={[
                'Helps protect your <strong>Family</strong> from risks',
                'Helps protect your <strong>Property</strong> from risks',
                'Aims to become the your first point of contact when it comes to Insurance Brokerage',
                'Believes strongly in Innovation'
              ]}
            >
              <p>Helps protect your <strong>Family</strong> from risks</p>
              <p>Helps protect your <strong>Property</strong> from risks</p>
              <p>Aims to become the major insurance brokerage firm globally</p>
              <p>Believes strongly in Innovation</p>
            </TypedComponent>
          </div>
        </div>
      </div>
    </section>
  )
}
const sampleData = [
  {
    id: 0,
    className: '',
    iconName: 'icon8-bungalow',
    iconClass: 'color_primary',
    title: 'Home Insurance',
    textMsg: 'We would help you achieve the lowest Home Insurance Rate possible',
    linkTo: '/services#home', footer: 'Learn More'
  },
  {
    id: 1,
    className: ' -colored colored_primary',
    iconName: 'icon8-home',
    iconClass: 'color_white',
    title: 'Vehicle Insurance',
    textMsg: 'We would help you achieve the lowest Home Insurance Rate possible',
    linkTo: '/services#home', footer: 'Learn More'
  },
  {
    id: 2,
    className: ' -colored colored_secondary',
    iconName: 'icon8-bungalow',
    iconClass: 'color_white',
    title: 'Fire Insurance',
    textMsg: 'We would help you achieve the lowest Fire Insurance Rate possible',
    linkTo: '/services#home',
    footer: 'Learn More'
  },
  {
    id: 3,
    className: '',
    iconName: 'icon8-bungalow',
    iconClass: 'color_white',
    title: 'Accident Insurance',
    textMsg: 'We would help you achieve the lowest Accident Insurance Rate possible',
    linkTo: '/services#home',
    footer: 'Learn More'
  },
  {
    id: 4,
    className: '',
    iconName: 'icon8-bungalow',
    iconClass: 'color_white',
    title: 'Home Insurance',
    textMsg: 'We would help you achieve the lowest Home Insurance Rate possible',
    linkTo: '/services#home',
    footer: 'Learn More'
  },
  {
    id: 5,
    className: '',
    iconName: 'icon8-bungalow',
    iconClass: 'color_white',
    title: 'Travel Insurance',
    textMsg: 'We would help you achieve the lowest Travel Insurance Rate possible',
    linkTo: '/services#home',
    footer: 'Learn More'
  },
];
class HomePage extends React.Component {

  render() {
    return (
      <React.Fragment>
        {/* <HomeSliderSection {...this.props} /> */}
        <Services
          services={sampleData}
        />
      </React.Fragment>
    );
  }
}
export default HomePage;
