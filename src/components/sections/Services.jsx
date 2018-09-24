import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';

import {
  Card,
  LazyLoadingCard
} from '../card';


function Services(props) {
  return (
    <Section
      className={props.className}
    >
      <div className="section--header">
        <h2 className="section--title">
          Services
        </h2>
        <p className="section--description">
          Some of the services we offer
        </p>
      </div>
      <div className="section--container">
        {props.services.length >= 1 &&
          <div className="cards -shadowed">
            <LazyLoadingCard />
            {props.services.map((card) =>
              <Card
                key={card.id}
                className={card.className}
                iconName={card.iconName}
                iconClass={card.iconClass}
                title={card.title}
                textMsg={card.textMsg}
                linkTo={card.linkTo}
                footer={card.footer}
              />
            )}
          </div>
        }
      </div>
    </Section>
  );
}
Services.defaultProps = {
  className: undefined,
  services: []
}
Services.propTypes = {
  className: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.any,
        className: PropTypes.string,
        iconName: PropTypes.string,
        title: PropTypes.string,
        textMsg: PropTypes.string,
        linkTo: PropTypes.string,
        footer: PropTypes.string
      }
    )
  )
}
export default Services;
