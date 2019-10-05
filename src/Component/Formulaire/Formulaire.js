import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import Projet from '../Projet/Projet'
import Caracteristiques from '../Caracteristiques/Caracteristiques'
import './Formulaire.css';
import { pretInfos } from '../Utils/pret';

function Formulaire() {

  const [projet, setProjet] = useState(pretInfos)

  useEffect(() => {
    if (localStorage.getItem('projet')) {
      return setProjet(JSON.parse(localStorage.getItem('projet')));
    } return projet
  }, [])

  useEffect(() => {
    projet != {} && localStorage.setItem("projet", JSON.stringify(projet))

  }, [projet])

  const supprimer = () => {
    setProjet(pretInfos)
  }

  const handleChange = value => event => {
    setProjet({ ...projet, [value]: event.target.value });
  };

  return (
    <div>
      <div className="options">
        <div>Effacer le formulaire</div>
        <i
          className="fas fa-trash-alt plusButton"
          title='Effacer mes données'
          onClick={supprimer}
          onKeyDown={() => { }}
          role="button"
          tabIndex={0}
        />
      </div>
      <div className='formulaireRecap'>
        <div className='formulaireProjet'>
          <Form >
            <div className="sectionFirst"> Mon projet</div>
            <Form.Group className='formulaire' widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="text"
                label="Nom du projet"
                value={projet.nomProjet}
                onChange={handleChange('nomProjet')}
                placeholder="Nom du projet"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Montant de l'acquisition"
                value={projet.montantAcquisition}
                min="0"
                onChange={handleChange('montantAcquisition')}
                placeholder="Montant de l'acquisition"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Taux agence Immobilière"
                value={projet.tauxAgence}
                min="0"
                onChange={handleChange('tauxAgence')}
                placeholder="Taux agence Immobilière"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Montant des travaux"
                value={projet.montantTravaux}
                min="0"
                onChange={handleChange('montantTravaux')}
                placeholder="Montant travaux"
              />
            </Form.Group>
            <div className="block">
              <div className="revenus">
                <div className="section"> Mes revenus (mois)</div>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Monsieur"
                    value={projet.revMonsieur}
                    min="0"
                    onChange={handleChange('revMonsieur')}
                    placeholder="Monsieur"
                  />
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Madame"
                    value={projet.revMadame}
                    min="0"
                    onChange={handleChange('revMadame')}
                    placeholder="Madame"
                  />
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Autres"
                    value={projet.autresRevenus}
                    min="0"
                    onChange={handleChange('autresRevenus')}
                    placeholder="Autres"
                  />
                </Form.Group>
              </div>
              <div className="charges">
                <div className="section"> Mes charges</div>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    type="number"
                    label="Mes Charges"
                    value={projet.charges}
                    min="0"
                    onChange={handleChange('charges')}
                    placeholder="Mes charges"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="section"> Mon épargne et mon apport</div>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Mon épargne"
                value={projet.epargne}
                min="0"
                onChange={handleChange('epargne')}
                placeholder="Mon épargne"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Mon apport"
                value={projet.apport}
                min="0"
                onChange={handleChange('apport')}
                placeholder="Mon apport"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Autre Apport"
                value={projet.apportSup}
                min="0"
                onChange={handleChange('apportSup')}
                placeholder="Autre Apport"
              />
            </Form.Group>
          </Form>
        </div>
        <div className='formulaireBanque'>
          <Form >
            <div className="sectionFirst">Mon prêt</div>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Durée (année)"
                value={projet.duree}
                min="0"
                onChange={handleChange('duree')}
                placeholder="Durée (mois)"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Taux d'emprunt"
                value={projet.taux}
                min="0"
                max="99"
                onChange={handleChange('taux')}
                placeholder="Taux d'emprunt"
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Assurance Monsieur (€) / mois"
                value={projet.assurancesMonsieur}
                min="0"
                onChange={handleChange('assurancesMonsieur')}
                placeholder="Assurance Monsieur"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Assurance Madame (€) / mois"
                value={projet.assurancesMadame}
                min="0"
                onChange={handleChange('assurancesMadame')}
                placeholder="Assurance Madame"
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Garanties"
                value={projet.garantie}
                min="0"
                onChange={handleChange('garantie')}
                placeholder="Garanties"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Frais Dossier"
                value={projet.fraisDossier}
                min="0"
                onChange={handleChange('fraisDossier')}
                placeholder="Frais Dossier"
              />
            </Form.Group>
          </Form>
        </div>
        <div className='recapPret'>
          <Projet
            nomProjet={projet.nomProjet}
            montantAcquisition={Number(projet.montantAcquisition)}
            montantTravaux={Number(projet.montantTravaux)}
            tauxNotaire={projet.tauxNotaire * 100}
            fraisNotaire={projet.montantAcquisition * projet.tauxNotaire}
            fraisAgence={projet.montantAcquisition * (projet.tauxAgence / 100)}
            revenus={Number(projet.revMonsieur) + Number(projet.revMadame) + Number(projet.autresRevenus)}
            charges={Number(projet.charges)}
            epargne={Number(projet.epargne)}
            apport={Number(projet.apport)}
            apportSup={Number(projet.apportSup)}
            assurancesMonsieur={Number(projet.assurancesMonsieur)}
            assurancesMadame={Number(projet.assurancesMadame)}
            garantie={Number(projet.garantie)}
            fraisDossier={Number(projet.fraisDossier)}
          />
        </div>
      </div>
      <Caracteristiques
        nomProjet={projet.nomProjet}
        montantAcquisition={Number(projet.montantAcquisition)}
        montantTravaux={Number(projet.montantTravaux)}
        fraisNotaire={projet.montantAcquisition * projet.tauxNotaire}
        fraisAgence={projet.montantAcquisition * (projet.tauxAgence / 100)}
        revenus={Number(projet.revMonsieur) + Number(projet.revMadame) + Number(projet.autresRevenus)}
        charges={Number(projet.charges)}
        epargne={Number(projet.epargne)}
        apport={Number(projet.apport)}
        apportSup={Number(projet.apportSup)}
        duree={Number(projet.duree*12)}
        taux={Number(projet.taux / 100)}
        assurancesMonsieur={Number(projet.assurancesMonsieur)}
        assurancesMadame={Number(projet.assurancesMadame)}
        garantie={Number(projet.garantie)}
        fraisDossier={Number(projet.fraisDossier)}
      />
    </div>
  );
}

export default Formulaire;