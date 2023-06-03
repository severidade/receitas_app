import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import styles from './Explore.module.css';

export default function Explore() {
  return (
    <section className={ styles.container_page_explore }>
      <Header title="Explore" />
      <div className={ styles.container_explore }>
        <Link to="explore/foods">
          <div
            data-testid="explore-foods"
            className={ styles.explore_foods }
          >
            <span className={ styles.title_button }>Explore Foods</span>
          </div>
        </Link>
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
