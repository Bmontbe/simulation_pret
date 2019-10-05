import React, { useState, useEffect} from 'react';
import './App.css';
import Formulaire from './Component/Formulaire/Formulaire';
import Charges from './Component/Charges/Charges';
import NavigationBar from './Component/NavigationBar/NavigationBar';

function App() {
  const [view, setView] = useState('Formulaire')
  const [newView, setNewView] = useState()

useEffect(() => {
  setNewView(view)
}, [view])

  const switchView = (view) => {
    setView(view)
  }

  return (
    <div>
      <div>
      <NavigationBar 
      switchViewFormulaire = {() => switchView('Formulaire')}
      switchViewCharges = {() => switchView('Charges')}
      />
      </div>
      <div>
      { newView && newView === 'Formulaire' && <Formulaire view = {newView}/>}
      { newView && newView === 'Charges' && <Charges view = {newView}/>}
      </div>
      
    </div>
  );
}

export default App;
