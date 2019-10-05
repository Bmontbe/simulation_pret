import React, { useState, useEffect } from 'react';
import './TableauAmortissement.css';

function TableauAmortissement(props) {

  const [array, setArray] = useState([])

  useEffect(() => {
    if (props.mensualite > 0) {
      arrayPret()
    } else if (props.mensualite <= 0) {
      setArray([])
    }

  }, [props.mensualite])

  const arrayPret = () => {

    let lineArray = []
    let mensualite = Number(props.mensualite).toFixed(2)
    let montantPret = Number(props.montantPret).toFixed(2)
    let capitalRestant = Number(props.montantPret).toFixed(2)
    let interet = Number((montantPret * props.taux / 12).toFixed(2))
    let mensualiteHorsInteret = (mensualite - interet).toFixed(2)

    for (let i = 0; i <= props.duree; i++) {
      if (props.mensualite && i === 0) {
        capitalRestant = ((montantPret - mensualiteHorsInteret)).toFixed(2)
        interet = Number((montantPret * props.taux / 12).toFixed(2))
        mensualiteHorsInteret = (mensualite - interet).toFixed(2)
        lineArray = [...lineArray, {
          montantPret: montantPret,
          mensualite: mensualite,
          mensualiteHorsInteret: mensualiteHorsInteret,
          interet: interet,
          capitalRestant: capitalRestant,
        }]
      }
      else if (props.mensualite && i > 0 && i !== props.duree) {
        montantPret = lineArray[i - 1].capitalRestant
        capitalRestant = ((montantPret - mensualiteHorsInteret)).toFixed(2)
        interet = Number(montantPret * props.taux / 12).toFixed(2)
        mensualiteHorsInteret = (mensualite - interet).toFixed(2)
        lineArray = [...lineArray, {
          montantPret: montantPret,
          mensualite: mensualite,
          mensualiteHorsInteret: mensualiteHorsInteret,
          interet: interet,
          capitalRestant: capitalRestant,
        }]
      }
      else if (props.mensualite && i === props.duree) {
        montantPret = lineArray[i - 1].capitalRestant
        capitalRestant = 0
        interet = Number(montantPret * props.taux / 12).toFixed(2)
        mensualite = lineArray[i - 1].capitalRestant
        mensualiteHorsInteret = (mensualite - interet).toFixed(2)
        lineArray = [...lineArray, {
          montantPret: montantPret,
          mensualite: mensualite,
          interet: interet,
          mensualiteHorsInteret: mensualiteHorsInteret,
          capitalRestant: capitalRestant,
        }]
      }

    }
    return setArray(lineArray)
  }

  return (
    <div className="blockTableau">
      {array.length > 0 ?
        <div className="tableau">
          <div className="lignePretTitre">
            <div className="colonne1"></div>
            <div className="colonne">Montant prêt</div>
            <div className="colonne">Mensualité</div>
            <div className="colonne3">Capital restant dû</div>
            <div className="colonne3">Intérêts mensualité</div>
            <div className="colonne">Capital restant dû</div>
          </div>
          {
            array && array.map((line, index) => (
              <div className="lignePret">
                <div className="colonne1">{new Intl.NumberFormat().format(index)}</div>
                <div className="colonne">{new Intl.NumberFormat().format(line.montantPret)}</div>
                <div className="colonne">{new Intl.NumberFormat().format(line.mensualite)}</div>
                <div className="colonne3">{new Intl.NumberFormat().format(line.mensualiteHorsInteret)}</div>
                <div className="colonne3">{new Intl.NumberFormat().format(line.interet)}</div>
                <div className="colonne">{new Intl.NumberFormat().format(line.capitalRestant)}</div>
              </div>
            ))
          }
        </div>
        :
        <div></div>}
    </div>
  );
}

export default TableauAmortissement;