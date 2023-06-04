import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ExploreLink from '../../components/ExploreLink/ExploreLink';

// import '../CSS/page_explore_food.css';
import './Explore_pages.css';

export default function ExploreFoods() {
  const [randomFoodUrl, setRandomFoodUrl] = useState();

  const randomFood = async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await request.json();
    setRandomFoodUrl(data.meals[0].idMeal);
  };

  useEffect(() => { randomFood(); }, []);

  return (
    <section className="container_page_explore">
      <Header title="Explore Foods" />
      <div className="container_explore_foods">
        <ExploreLink dataTestId="explore-by-ingredient" />
        <ExploreLink dataTestId="explore_food_by_nationality" />
        <ExploreLink dataTestId="explore-surprise" url={ randomFoodUrl } />
      </div>
      <Footer />
    </section>
  );
}
