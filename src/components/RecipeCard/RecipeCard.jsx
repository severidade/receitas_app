import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './RecipeCard.css';

class RecipeCard extends React.Component {
  render() {
    const { name, image, index, id, testid, foodOrDrink, cardType } = this.props;
    const imageClassName = cardType === 'drink_type'
      ? 'card_image_drink'
      : 'card_image_food';
    console.log(imageClassName);

    return (
      foodOrDrink === 'food' ? (
        <Link to={ `/drinks/${id}` }>
          <section data-testid={ `${index}-recipe-card` }>
            <div
              className="cards"
              data-testid={ testid ? testid[0] : `data-testid=${index}-recipe-card` }
            >
              <div
                data-testid={ testid ? testid[1] : '' }
                className="card"
              >
                <h1
                  data-testid={ `${index}-card-name` }
                  className="card_title"
                >
                  { name }
                </h1>
                <img
                  className={ imageClassName }
                  src={ image }
                  alt={ `imagem da receita ${name}` }
                  data-testid={ `${index}-card-img` }
                />
              </div>
            </div>
          </section>
        </Link>
      ) : (
        <Link to={ `/foods/${id}` }>
          <section data-testid={ `${index}-recipe-card` }>
            <div
              className="cards"
              data-testid={ testid ? testid[0] : `data-testid=${index}-recipe-card` }
            >
              <div
                data-testid={ testid ? testid[1] : '' }
                className="card"
              >
                <h1
                  data-testid={ `${index}-card-name` }
                  className="card_title"
                >
                  { name }
                </h1>
                <img
                  className={ imageClassName }
                  src={ image }
                  alt={ `imagem da receita ${name}` }
                  data-testid={ `${index}-card-img` }
                />
              </div>
            </div>
          </section>
        </Link>
      )
    );
  }
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  testid: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.string,
  foodOrDrink: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
};
RecipeCard.defaultProps = {
  id: '',
};

export default RecipeCard;
