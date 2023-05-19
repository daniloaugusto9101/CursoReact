import React from "react";


const App = () => {

  const luana = {
    nome: 'Luana',
    idade: 27,
    compras: [
      { produto: 'Geladeira', preco: 'R$ 2000' },
      { produto: 'Notebook', preco: 'R$ 1500' },
    ]
  }

  const jose = {
    nome: 'Jose',
    idade: 28,
    compras: [
      { produto: 'Geladeira', preco: 'R$ 2000' },
      { produto: 'Notebook', preco: 'R$ 1500' },
      { produto: 'Sofá', preco: 'R$ 3500' },
    ]
  }

  const h = luana;
  const total = h.compras
    .map((e) => {
      return Number(e.preco.replace('R$ ', ''))
    })
    .reduce((e, c) => {
      return e + c
    }, 0);

  return (
    <>
      <p>Nome: {h.nome}</p>
      <p>Idade: {h.idade}</p>
      <p>Tota:
        <span style={total > 5000 ? { color: 'red' } : { color: 'green' }}> R$ {total}</span>
      </p>
      {total >= 7000 && <p>Limite esgotado</p>}
    </>
  );
};

export default App
