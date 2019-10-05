import React from 'react';
import './NavigationBar.css';

function NavigationBar(props) {

    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Mon prêt immobilier</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active option">
        <a onClick={props.switchViewFormulaire} >Calcul de mon prêt</a>
      </li>
      <li className="nav-item option">
        <a onClick={props.switchViewCharges} >Calculer mes charges quotidiennes</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default NavigationBar;
