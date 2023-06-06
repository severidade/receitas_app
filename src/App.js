import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componentes relacionados à seção "Explore"
import Explore from './pages/explore_pages/Explore';
import ExploreFoods from './pages/explore_pages/ExploreFoods';
import ExploreDrinks from './pages/explore_pages/ExploreDrinks';
import ExploreFoodsIngredients from
'./pages/explore_pages_ingredientes/ExploreFoodsIngredients';
import ExploreDrinksIngredients from
'./pages/explore_pages_ingredientes/ExploreDrinksIngredients';
import ExploreFoodsNationalities from
'./pages/explore_page_nationalities/ExploreFoodsNationalities';

// Componentes relacionados à seção "Auth" (autenticação)
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

// Componentes relacionados à seção "Receitas"
import DoneRecipes from './pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

// Componentes relacionados à seção "Alimentos" (foods)
import Foods from './pages/foods_and_drinks_page/Foods';
import FoodDetails from './pages/FoodDetails';
import FoodInProgress from './pages/FoodInProgress';

// Componentes relacionados à seção "Bebidas" (drinks)
import Drinks from './pages/foods_and_drinks_page/Drinks';
import DrinksDetails from './pages/DrinksDetails';
import DrinksInProgress from './pages/DrinksInProgress';

// Outros componentes
import NotFound from './pages/NotFound';
import InProgressProvider from './context/InProgressContext/InProgressProvider';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />

      {/* Rotas da seção "Explore" */}
      <Route exact path="/explore" component={ Explore } />
      <Route
        exact
        path="/explore/foods"
        component={ ExploreFoods }
      />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodsIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodsNationalities }
      />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinksIngredients }
      />

      {/* Rotas da seção "Auth" */}
      <Route exact path="/profile" component={ Profile } />

      {/* Rotas da seção "Receitas" */}
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />

      {/* Rotas da seção "Alimentos" */}
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/foods/:id" component={ FoodDetails } />
      <Route
        exact
        path="/foods/:id/in-progress"
        render={ () => (
          <InProgressProvider>
            <FoodInProgress />
          </InProgressProvider>
        ) }
      />

      {/* Rotas da seção "Bebidas" */}
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/drinks/:id" component={ DrinksDetails } />
      <Route
        exact
        path="/drinks/:id/in-progress"
        render={ () => (
          <InProgressProvider>
            <DrinksInProgress />
          </InProgressProvider>
        ) }
      />

      {/* Rota padrão para página não encontrada */}
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
