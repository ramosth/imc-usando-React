import { useState } from 'react';
import './estilos.css'

const Formulario = (props) => {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const manipularAltura = (evento) => {
    setAltura(evento.target.value);
  }

  const manipularPeso = (evento) => {
    setPeso(evento.target.value);
  }

  const resultado = peso / Math.pow(altura, 2);

  const salvar = (evento) => {
    evento.preventDefault();
    const imc = {};
    imc.altura = altura;
    imc.peso = peso;
    console.log(resultado);
    console.log(imc);
    props.aoSalvar(imc);
    setPeso('')
    setAltura('')
  }

  return (<form className="form" onSubmit={salvar}>
    <div>
      <label>Altura</label>
      <input placeholder="Digite sua altura" type="text" className="altura" value={altura} onChange={manipularAltura} />
    </div>
    <div>
      <label>Peso</label>
      <input placeholder="Digite seu peso" type="text" className="peso" value={peso} onChange={manipularPeso}/>
    </div>
    <button className="btn-salvar">Calcular</button>
  </form>
  )
}

export default Formulario;