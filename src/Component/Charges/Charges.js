import React, { useState, useEffect } from 'react';
import { Form} from 'semantic-ui-react';
import './Charges.css';

function Charges(props) {

  const [charges, setCharges] = useState({
    fraisFixes: []
  })
  const [fraisFixes, setFraisFixes] = useState({ nomFrais: "", montantFrais: "" })
  const [arrayFraisFixes, setArrayFraisFixes] = useState([])

  const [inputModifFraisFixes, setInputModifFraisFixes] = useState({ nomFrais: "", montantFrais: "" })
  const [fraisDivers, setFraisDivers] = useState({ nomFrais: "", montantFrais: "" })
  const [arrayFraisDivers, setArrayFraisDivers] = useState([])

  const [inputModifFraisDivers, setInputModifFraisDivers] = useState({ nomFrais: "", montantFrais: "" })
  const [arrayFraisFixesLocalStorage, setArrayFraisFixesLocalStorage] = useState([])
  const [arrayFraisDiversLocalStorage, setArrayFraisDiversLocalStorage] = useState([])


  useEffect(() => {
    if (localStorage.getItem('arrayFraisFixes')) {
      let array = JSON.parse(localStorage.getItem('arrayFraisFixes'))
      console.log(array)
      if (array.length > 0) {
        for (let i = 0; i <= array.length; i++) {
          array[0].edit = true
        } return setArrayFraisFixesLocalStorage(array)
      }
    } return arrayFraisFixesLocalStorage;
  }, [])

  useEffect(() => {
    if (localStorage.getItem('arrayFraisDivers')) {
      let array = JSON.parse(localStorage.getItem('arrayFraisDivers'))
      console.log(array)
      if (array.length > 0) {
        for (let i = 0; i <= array.length; i++) {
          array[0].edit = true
        } return setArrayFraisDiversLocalStorage(array)
      }
    } return arrayFraisDiversLocalStorage;
  }, [])

  useEffect(() => {
    arrayFraisFixes != {} && localStorage.setItem("arrayFraisFixes", JSON.stringify(arrayFraisFixes));
  }, [arrayFraisFixes])

  useEffect(() => {
    arrayFraisDivers != {} && localStorage.setItem("arrayFraisDivers", JSON.stringify(arrayFraisDivers))
  }, [arrayFraisDivers])

  useEffect(() => {
    setArrayFraisFixes(arrayFraisFixesLocalStorage)
  }, [arrayFraisFixesLocalStorage])

  useEffect(() => {
    setArrayFraisDivers(arrayFraisDiversLocalStorage)
  }, [arrayFraisDiversLocalStorage])

  const handleChange = value => event => {
    setFraisFixes({ ...fraisFixes, [value]: event.target.value, edit: true });
  };

  const handleChangeModifFraisFixes = value => event => {
    setInputModifFraisFixes({ ...inputModifFraisFixes, [value]: event.target.value, edit: true });
  };

  const handleChange2 = value => event => {
    setFraisDivers({ ...fraisDivers, [value]: event.target.value, edit: true });
  };

  const handleChangeModifFraisDivers = value => event => {
    setInputModifFraisDivers({ ...inputModifFraisDivers, [value]: event.target.value, edit: true });
  };

  const addFraisFixes = () => {
    if (fraisFixes) {
      setArrayFraisFixes([...arrayFraisFixes, fraisFixes])
      setFraisFixes({ nomFrais: "", montantFrais: "" })
    }
  }

  const addFraisDivers = () => {
    if (fraisDivers) {
      setArrayFraisDivers([...arrayFraisDivers, fraisDivers])
      setFraisDivers({ nomFrais: "", montantFrais: "" })
    }
  }

  const deleteFraisFixes = (index) => {
    let eventsTemp = [...arrayFraisFixes];
    eventsTemp.splice(index, 1);
    setArrayFraisFixes(eventsTemp);
  }

  const deleteFraisDivers = (index) => {
    let eventsTemp = [...arrayFraisDivers];
    eventsTemp.splice(index, 1);
    setArrayFraisDivers(eventsTemp);
  }

  const changeFraisFixes = (index) => {
    setInputModifFraisFixes(arrayFraisFixes[index])
    const newList = [...arrayFraisFixes];
    newList[index].edit = false;
    setArrayFraisFixes(newList)
  }

  const changeFraisDivers = (index) => {
    console.log(arrayFraisDivers)
    setInputModifFraisDivers(arrayFraisDivers[index])
    const newList = [...arrayFraisDivers];
    newList[index].edit = false;
    setArrayFraisDivers(newList)
  }

  const saveFraisFixes = (index) => {
    if (inputModifFraisFixes === arrayFraisFixes[index]) {
      const newList = [...arrayFraisFixes];
      newList[index].edit = true;
      setArrayFraisFixes(newList)
    } else {
      const newList = [...arrayFraisFixes];
      newList.splice(index, 1, inputModifFraisFixes);
      setArrayFraisFixes(newList)
    }
  }

  const saveFraisDivers = (index) => {
    if (inputModifFraisDivers === arrayFraisDivers[index]) {
      const newList = [...arrayFraisDivers];
      newList[index].edit = true;
      setArrayFraisDivers(newList)
    } else {
      const newList = [...arrayFraisDivers];
      newList.splice(index, 1, inputModifFraisDivers);
      setArrayFraisDivers(newList)
    }
  }


  const totalChargesFixes = (arrayFraisFixes) => {
    var valeurInitiale = 0;
    var somme = arrayFraisFixes.reduce(function (accumulateur, valeurCourante) {
      return accumulateur + Number(valeurCourante.montantFrais);
    }, valeurInitiale);
    return somme
  }

  const totalChargesDivers = (arrayFraisDivers) => {
    var valeurInitiale = 0;
    var somme = arrayFraisDivers.reduce(function (accumulateur, valeurCourante) {
      return accumulateur + Number(valeurCourante.montantFrais);
    }, valeurInitiale);
    return somme
  }

  return (
    <div>
      <h1>Mes charges qutidiennes mensuels</h1>
      <div>Les charges quotidiennes ne comprennent pas le loyer et les emprunts</div>
      <div className="chargesForm">
        <div className="chargesFixes">
          <Form >
            <div className="sectionFirst">Mes frais fixes</div>
            <Form.Group className='formulaire' widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="text"
                label="Nom frais fixes"
                value={fraisFixes.nomFrais}
                onChange={handleChange('nomFrais')}
                placeholder="Nom frais fixes"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="number"
                label="Montant frais fixes"
                value={fraisFixes.montantFrais}
                onChange={handleChange('montantFrais')}
                placeholder="Montant frais fixes"
              />
              <i
                className="fas fa-plus-circle buttonForm"
                title='Effacer mes données'
                onClick={addFraisFixes}
                onKeyDown={() => { }}
                role="button"
                tabIndex={0}
              />
            </Form.Group>
          </Form>
          <div className="recapFrais">
            {
              arrayFraisFixes ? arrayFraisFixes.map((frais, index) => (
                <div>
                  {arrayFraisFixes && arrayFraisFixes[index].edit ?
                    <div className="categorieFrais">
                      <div className='titleFrais'>{frais.nomFrais}</div>
                      <div className='montantFrais'>{frais.montantFrais} €</div>
                      <i
                        className="fas fa-pencil-alt buttonForm"
                        title='Effacer mes données'
                        onClick={() => changeFraisFixes(index)}
                        onKeyDown={() => { }}
                        role="button"
                        tabIndex={0}
                      />
                      <i
                        className="fas fa-trash-alt buttonForm"
                        title='Effacer mes données'
                        onClick={() => deleteFraisFixes(index)}
                        onKeyDown={() => { }}
                        role="button"
                        tabIndex={0}
                      />
                    </div>
                    :
                    <div className="categorieFrais">
                      <Form.Input
                        fluid
                        className='titleFrais'
                        id='form-subcomponent-shorthand-input-first-name'
                        value={inputModifFraisFixes.nomFrais}
                        type="text"
                        onChange={handleChangeModifFraisFixes('nomFrais')}
                        placeholder="Nom frais fixes"
                      />
                      <Form.Input
                        fluid
                        className='montantFrais'
                        id='form-subcomponent-shorthand-input-first-name'
                        value={inputModifFraisFixes.montantFrais}
                        type="number"

                        onChange={handleChangeModifFraisFixes('montantFrais')}
                        placeholder="Montant frais fixes"
                      />
                      <i
                        className="fas fa-check-circle buttonSave"
                        title='Effacer mes données'
                        onClick={() => saveFraisFixes(index)}
                        onKeyDown={() => { }}
                        role="button"
                        tabIndex={0}
                      />
                    </div>
                  }
                </div>
              )
              )
                : ""
            }
          </div>
          <div className="totalCharges">
          <div>Total des charges : {arrayFraisFixes ? totalChargesFixes(arrayFraisFixes) : ""} €</div>
          </div>
        </div>
        <div className="chargesDivers">
          <Form>
            <div className="sectionFirst">Mes frais divers</div>
            <Form.Group className='formulaire' widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="text"
                label="Nom frais divers"
                value={fraisDivers.nomFrais}
                onChange={handleChange2('nomFrais')}
                placeholder="Nom frais divers"
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                type="text"
                label="Montant frais divers"
                value={fraisDivers.montantFrais}
                onChange={handleChange2('montantFrais')}
                placeholder="Montant frais divers"
              />
              <i
                className="fas fa-plus-circle buttonForm"
                title='Effacer mes données'
                onClick={addFraisDivers}
                onKeyDown={() => { }}
                role="button"
                tabIndex={0}
              />
            </Form.Group>
          </Form>
          <div className="recapFrais">
            {
              arrayFraisDivers ? arrayFraisDivers.map((frais, index) => (
                <div>
                  {arrayFraisDivers && arrayFraisDivers[index].edit ?
                    <div className="categorieFrais">
                      <div className='titleFrais'>{frais.nomFrais}</div>
                      <div className='montantFrais'>{frais.montantFrais} €</div>

                      <i
                        className="fas fa-pencil-alt buttonForm"
                        title='Effacer mes données'
                        onClick={() => changeFraisDivers(index)}
                        onKeyDown={() => { }}
                        role="button"
                        tabIndex={0}
                      />
                      <i
                        className="fas fa-trash-alt buttonForm"
                        title='Effacer mes données'
                        onClick={() => deleteFraisDivers(index)}
                        onKeyDown={() => { }}
                        role="button"
                        tabIndex={0}
                      />
                    </div>
                    :
                    <div className="categorieFrais">
                      <Form.Input
                        fluid
                        className='titleFrais'
                        id='form-subcomponent-shorthand-input-first-name'
                        value={inputModifFraisDivers.nomFrais}
                        type="text"

                        onChange={handleChangeModifFraisDivers('nomFrais')}
                        placeholder="Nom frais Divers"
                      />
                      <Form.Input
                        fluid
                        className='montantFrais'
                        id='form-subcomponent-shorthand-input-first-name'
                        value={inputModifFraisDivers.montantFrais}
                        type="number"

                        onChange={handleChangeModifFraisDivers('montantFrais')}
                        placeholder="Montant frais Divers"
                      />
                      <i
                        className="fas fa-check-circle buttonSave"
                        title='Effacer mes données'
                        onClick={() => saveFraisDivers(index)}
                        onKeyDown={() => { }}
                        role="button"
                        tabIndex={0}
                      />
                    </div>
                  }
                </div>
              )
              )
                : ""
            }
          </div>
          <div className="totalCharges">
          <div>Total des charges : {arrayFraisDivers ? totalChargesDivers(arrayFraisDivers) : ""} €</div>
          </div>
        </div>

      </div>

      <div className="totalCharges">Total : {totalChargesDivers(arrayFraisDivers) + totalChargesDivers(arrayFraisFixes)} €</div>

    </div>
  );
}

export default Charges;