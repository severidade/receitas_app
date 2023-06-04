import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ExploreLink from '../../components/ExploreLink/ExploreLink';

import './Explore_pages.css';

export default function Explore() {
  return (
    <section className="container_page_explore">
      <Header title="Explore" />
      <div className="container_explore">
        <ExploreLink dataTestId="explore-foods" />
        <ExploreLink dataTestId="explore-drinks" />
      </div>
      <Footer />
    </section>
  );
}
