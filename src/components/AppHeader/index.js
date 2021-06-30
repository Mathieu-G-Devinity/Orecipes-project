import React from 'react';

import './style.scss';
import orecipesLogo from 'src/assets/logo.png';

const AppHeader = () => (
  <header className="header">
    <img src={orecipesLogo} className="header-logo" alt="Logo oRecipes" />
  </header>
);

export default AppHeader;
