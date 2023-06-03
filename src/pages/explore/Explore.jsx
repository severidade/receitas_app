import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import styles from './Explore.module.css';
import ExploreLink from '../../components/ExploreLink/ExploreLink';

export default function Explore() {
  return (
    <section className={ styles.container_page_explore }>
      <Header title="Explore" />
      <div className={ styles.container_explore }>
        <ExploreLink
          link_to="explore/foods"
          data-testid="explore-foods"
          title="Explore Foods"
        />
        <Link to="explore/drinks">
          <div
            data-testid="explore-drinks"
            className={ styles.explore_drinks }
          >
            <span className={ styles.title_button }>Explore Drinks</span>
          </div>
        </Link>
      </div>
      <Footer />
    </section>
  );
}
