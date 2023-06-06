import React from 'react';
import PropTypes from 'prop-types';
import './ExploreLink.css';

import { Link } from 'react-router-dom';

export default function ExploreLink({ dataTestId, url, routeType }) {
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
      linkTo: routeType === 'foods'
        ? '/explore/foods/ingredients'
        : '/explore/drinks/ingredients',
      title: 'By Ingredient',
      className: routeType === 'foods'
        ? 'explore_food_by_ingredient'
        : 'explore_drink_by_ingredient',
    },
    explore_food_by_nationality: {
      linkTo: '/explore/foods/nationalities',
      title: 'By Nationality',
      className: 'explore_food_by_nationality',
    },
    'explore-surprise': {
      linkTo: routeType === 'foods' ? `/foods/${url}` : `/drinks/${url}`,
      title: 'Surprise me',
      className: routeType === 'foods'
        ? 'explore_food_by_surprise'
        : 'explore_drink_by_surprise',
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
  url: PropTypes.string.isRequired,
  routeType: PropTypes.string.isRequired,
};
