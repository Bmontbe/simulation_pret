import React, { useState, useEffect } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import Formulaire from '../Formulaire/Formulaire';
import Charges from '../Charges/Charges';
import './NavigationBar.css';

function NavigationBar(props) {

    return (
    <div>
      <Navbar color="light" className="navigationBar" light expand="md">
        <NavbarBrand>
        <Button onClick={props.switchViewFormulaire} >Mon prêt immobilier</Button>
        </NavbarBrand>
      
          <Nav className="ml-auto" navbar>
          <NavItem className="option">
            <div onClick={props.switchViewCharges} >Calculer mes charges de tous les jours</div>
          </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
