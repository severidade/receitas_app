import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import CSS from './Header.module.css';

function Header(props) {
  const searchPaths = ['/foods', '/drinks', '/explore/foods/nationalities'];
  const [title, setTitle] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    function changeHeader() { // REFATORAR
      switch (path) {
      case '/foods':
        setTitle('Foods');
        break;
      case '/drinks':
        setTitle('Drinks');
        break;
      case '/explore':
        setTitle('Explore');
        break;
      case '/explore/foods':
        setTitle('Explore Foods');
        break;
      case '/explore/drinks':
        setTitle('Explore Drinks');
        break;
      case '/explore/foods/ingredients':
        setTitle('Explore Ingredients');
        break;
      case '/explore/drinks/ingredients':
        setTitle('Explore Ingredients');
        break;
      case '/explore/foods/nationalities':
        setTitle('Explore Nationalities');
        break;
      case '/done-recipes':
        setTitle('Done Recipes');
        break;
      case '/favorite-recipes':
        setTitle('Favorite Recipes');
        break;
      case '/profile':
        setTitle('Profile');
        break;

      default:
        break;
      }
    }
    changeHeader();
  });

  return (
    <div className={ CSS.nav_conteiner }>
      <Link to="/profile">
        {/* pq a imagem esta sendo passada no button? */}
        <button
          type="button"
          data-testid="profile-top-btn"
          className={ CSS.profile_button }
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="Ícone do perfil" />
        </button>
      </Link>
      <h1 className={ CSS.nav_title } data-testid="page-title">{title}</h1>
      {
        searchPaths.includes(path)
        && (
          <button
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            onClick={ () => { setShowSearch(!showSearch); } }

          >
            <img src={ searchIcon } alt="Lupa" />
          </button>
        )
      }
      {showSearch && <SearchBar props={ props } />}
    </div>
  );
}

export default Header;
