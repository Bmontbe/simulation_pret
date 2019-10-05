import React from 'react';
import './Projet.css';

function Projet(props) {

const totalProjet = () => {
  return new Intl.NumberFormat().format(Number(props.montantAcquisition + props.montantTravaux 
    + props.fraisNotaire+props.fraisAgence + props.fraisDossier + props.garantie).toFixed(0))
}

const totalApport = () => {
  return (new Intl.NumberFormat().format(Number(props.apport +props.apportSup)))
}

  return (
 <div className="recap">
    <div className="sectionFirst">
     <div>{props.nomProjet ? `Récapitulatif de mon projet : ${props.nomProjet}` : "Récapitulatif de mon projet"}</div>
    </div>
   <div className="categorie">
     <div className="title">Montant de l'acquisition</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(props.montantAcquisition)}</span> euros</div>
   </div>
   <div className="categorie">
     <div className="title">Montant des travaux</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(props.montantTravaux)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Frais de notaire ({props.tauxNotaire}%)</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(Number(props.fraisNotaire).toFixed(0))}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Frais d'agence</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(Number(props.fraisAgence).toFixed(0))}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Frais de garanties</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(Number(props.garantie))}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Frais de dossier</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(Number(props.fraisDossier))}</span> euros</div>
    </div>
    <div className="categorieTotal">
     <div className="title">Total du projet</div>
     <div className="montant"><span>{totalProjet()}</span> euros</div>
    </div>
    <div className="section">
     <div>Mes Revenus et mes charges mensuels</div>
    </div>
    <div className="categorie">
     <div className="title">Total des Revenus</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(props.revenus)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Total de mes charges</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(props.charges)}</span> euros</div>
    </div>
    <div className="section">
     <div>Mon épargne et mon apport</div>
    </div>
    <div className="categorie">
     <div className="title">Mon épargne</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(props.epargne)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Mon apport</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(props.apport)}</span> euros</div>
    </div>
    <div className="categorie">
     <div className="title">Apport supplémentaire</div>
     <div className="montant"><span>{new Intl.NumberFormat().format(props.apportSup)}</span> euros</div>
    </div>
    <div className="categorieTotal">
     <div className="title">Total de votre apport</div>
     <div className="montant"><span>{totalApport()}</span> euros</div>
    </div>
 </div>
  );
}

export default Projet;