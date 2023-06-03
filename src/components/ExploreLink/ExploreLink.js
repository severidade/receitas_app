import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// import styles from './Explore.module.css';

export default function ExploreLink({ linkTo, dataTestid, title }) {
  return (
    <Link to={ linkTo }>
      <div
        data-testid={ dataTestid }
        // className={ styles.explore_foods }
      >
        <span
          // className={ styles.title_button }
          className={ title }
        >
          Explore Foods
        </span>
      </div>
    </Link>
  );
}

ExploreLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
