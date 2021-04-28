import '../styles/BtnExploreFood.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterSpec from '../components/FooterSpec';

class Explore extends Component {
  render() {
    return (
      <div>
        <p>Aqui vai ser renderizado o Header</p>
        <Link to="/explorar/comidas">
          <button
            type="button"
            data-testid="explore-food"
            className="btnExploreFood"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            type="button"
            data-testid="explore-drinks"
            className="btnExploreDrink"
          >
            Explorar Bebidas
          </button>
        </Link>
        <FooterSpec />
      </div>
    );
  }
}

export default Explore;
