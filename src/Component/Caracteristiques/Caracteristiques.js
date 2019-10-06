import React, { useState, useEffect } from 'react';
import './Caracteristiques.css';
import TableauAmortissement from '../TableauAmortissement/TableauAmortissement'

function Caracteristiques(props) {

  const [arrayFraisFixes, setArrayFraisFixes] = useState([])
  const [arrayFraisDivers, setArrayFraisDivers] = useState([])

  useEffect(() => {
    if (localStorage.getItem('arrayFraisFixes')) {
     return setArrayFraisFixes(JSON.parse(localStorage.getItem('arrayFraisFixes')))
    } return arrayFraisFixes;
  }, [props.view])

  useEffect(() => {
    if (localStorage.getItem('arrayFraisDivers')) {
     return setArrayFraisDivers(JSON.parse(localStorage.getItem('arrayFraisDivers')))
    } return arrayFraisDivers;
  }, [props.view])

  const montantPret = (props.montantAcquisition + props.montantTravaux - props.apport - props.apportSup +
    props.fraisAgence + props.fraisNotaire + props.garantie + props.fraisDossier).toFixed(0)

  const mensualite = () => {
    if (montantPret && props.taux && props.duree) {
      return (((montantPret * props.taux) / 12) / (1 - Math.pow((1 + props.taux / 12), -(props.duree)))).toFixed(2)
    }
    else return 0
  }

  const nouvellesCharges = props.charges + parseFloat(mensualite())

  const endettement = () => {
    if (mensualite() > 0 && props.revenus) {
      return ((nouvellesCharges / props.revenus) * 100).toFixed(2)
    } else if (mensualite() <= 0 && props.revenus) {
      return ((props.charges / props.revenus) * 100).toFixed(2)
    }
    else return 0
  }

  const rav = () => {
    if (props.revenus) {
      return (props.revenus - props.charges - mensualite()).toFixed(0)
    } return 0
  }

  const adi = () => {
    const MrMme = Number(props.assurancesMonsieur) + Number(props.assurancesMadame)
    return MrMme

  }

  const totalMensualiteAdi = () => {
    if (mensualite() > 0) {
      const result = Number(mensualite()) + Number(adi())
      return result.toFixed(2)
    } return 0
  }

  const totalChargesFixes = () => {
    var valeurInitiale = 0;
    var sommeFraisFixes = arrayFraisFixes.reduce(function (accumulateur, valeurCourante) {
      return accumulateur + Number(valeurCourante.montantFrais);
    }, valeurInitiale);
    var sommeFraisDivers = arrayFraisDivers.reduce(function (accumulateur, valeurCourante) {
      return accumulateur + Number(valeurCourante.montantFrais);
    }, valeurInitiale);
    return (sommeFraisFixes + sommeFraisDivers)
  }

  return (
    <div>
      <div className="blockCaracteristiques">
        <div className="sectionCaracteristiques">
          <div className="titreCaracteristiques">Résultat de votre prêt pour votre projet</div>
        </div>
        <div className="caracteristiques">
          <div className="categorieCaracteristiques">
            <div className="title">Montant du prêt</div>
            <div className="montant"><span>{mensualite() > 0 ? new Intl.NumberFormat().format(montantPret) : 0}</span> €</div>
          </div>
          <div className="categorieCaracteristiques">
            <div className="title">Mensualité</div>
            <div className="montant"><span>{mensualite() > 0 ? new Intl.NumberFormat().format(mensualite()) : 0}</span> €</div>
          </div>
          <div className="categorieCaracteristiques">
            <div className="title">Total /mois</div>
            <div className="montant"><span>{new Intl.NumberFormat().format(totalMensualiteAdi())}</span> €</div>
          </div>
          <div className="categorieCaracteristiques">
            <div className="title">Taux endettement</div>
            <div className="montant"><span>{new Intl.NumberFormat().format(endettement())}</span> %</div>
          </div>
          <div className="categorieCaracteristiques">
            <div className="title">Reste à vivre /mois</div>
            <div className="montant"><span>{new Intl.NumberFormat().format(rav())}</span> €</div>
          </div>
          <div className="categorieCaracteristiques">
            <div className="info">Charges quotidiennes</div>
            <div className="infoMontant">{totalChargesFixes()} €</div>
          </div>
          <div className="categorieCaracteristiques">
            <div className="title">Epargne restante</div>
            <div className="montant"> {props.epargne ? <span>{new Intl.NumberFormat().format(props.epargne - props.apport)}</span> : <span>0</span>} €</div>
          </div>
        </div>
      </div>
      <TableauAmortissement
        montantPret={montantPret}
        mensualite={mensualite()}
        duree={props.duree}
        taux={props.taux}
      />
    </div>
  );
}

export default Caracteristiques;