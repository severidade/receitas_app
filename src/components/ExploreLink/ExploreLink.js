import React from 'react';
import PropTypes from 'prop-types';
import './ExploreLink.css';

import { Link } from 'react-router-dom';

export default function ExploreLink({ dataTestId }) {
  const linkMapping = {
    'explore-foods': {
      linkTo: 'explore/foods',
      title: 'Explore Foods',
      className: 'explore_foods',
    },
    'explore-drinks': {
      linkTo: 'explore/drinks',
      title: 'Explore Drinks',
      className: 'explore_drinks',
    },
    'explore-by-ingredient': {
      linkTo: '/explore/foods/nationalities',
      title: 'By Ingredient',
      className: 'explore_food_by_ingredient',
    },
    explore_food_by_nationality: {
      linkTo: '/explore/foods/nationalities',
      title: 'By Nationality',
      className: 'explore_food_by_nationality',
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