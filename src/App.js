import { useState } from "react";
import "./style.scss";

export default function App() {
  // primeiroValor é variavel de estado
  //setPrimeiroValor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  //(e.target.value) é o valor que está sendo digitado dentro do input
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <main>
      <h1>Calculadora Simples</h1>
      {/* onChange pra capturar o que o usuario esta digitando */}
      <input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoPrimeiroValor}
      />
      <input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
      />

      <p> Adicione o número e clique no operador que deseja</p>
      <div className="div">
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={multiplicacao}>x</button>
        <button onClick={divisao}>/</button>
      </div>

      <ul>
        <h3>Resultado</h3>
        <li>{resultado}</li>
      </ul>
    </main>
  );
}
