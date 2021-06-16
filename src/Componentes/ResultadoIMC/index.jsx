import Card from '../Card'

const ResultadoIMC = (props) => {
  return <Card>
  <p>
    O Resultado do seu IMC é: <strong>{props.resultado}</strong>
  </p>
</Card>
}

export default ResultadoIMC;