import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header/Header';
import ExploreLink from '../../components/ExploreLink/ExploreLink';

// import '../CSS/page_explore_drink.css';
import './Explore_pages.css';

export default function ExploreDrinks() {
  const [randomDrinkUrl, setRandomDrinkUrl] = useState();

  const randomDrink = async () => {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await request.json();
    setRandomDrinkUrl(data.drinks[0].idDrink);
  };

  useEffect(() => { randomDrink(); }, []);

  return (
    <section className="container_page_explore">
      <Header title="Explore Drinks" />
      <div className="container_explore_drinks">
        <ExploreLink
          dataTestId="explore-by-ingredient"
          routeType="drinks"
        />
        <ExploreLink
          dataTestId="explore-surprise"
          url={ randomDrinkUrl }
          routeType="drinks"
        />
      </div>
      <Footer />
    </section>
  );
}
