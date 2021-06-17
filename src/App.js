import Formulario from './Componentes/Formulario';
import './App.css';
import ResultadoIMC from './Componentes/ResultadoIMC';
import { useState } from 'react';

const App = () => {

  const [imcs, setImcs] = useState([]);

  const adicionaImcs = (imc) => {
    setImcs([imc, ...imcs]);
  }

  return (<div className="container">
    <h1 className="titulo">Cálculo do IMC</h1>

    <Formulario aoSalvar={adicionaImcs} />

    {imcs.map((imc, indice) =>
      <ResultadoIMC
        key={indice}
        resultado={imc}
      />
    )}

  </div>
  );
}

export default App;
