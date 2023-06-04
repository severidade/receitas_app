import React from 'react';
import PropTypes from 'prop-types';
import './ExploreLink.css';

import { Link } from 'react-router-dom';

export default function ExploreLink({ dataTestId }) {
  const linkMapping = {
    'explore-foods': {
      linkTo: '/foods',
      title: 'Explore Foods',
      className: 'explore_foods',
    },
    'explore-drinks': {
      linkTo: '/drinks',
      title: 'Explore Drinks',
      className: 'explore_drinks',
    },
  };

  const { linkTo, title, className } = linkMapping[dataTestId] || {};

  return (
    <Link
      to={ linkTo || '/' }
      data-testid={ dataTestId }
      className={ className }
    >
      <span
        className="title_link"
      >
        {title || 'Explore'}
      </span>
    </Link>
  );
}

ExploreLink.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};
