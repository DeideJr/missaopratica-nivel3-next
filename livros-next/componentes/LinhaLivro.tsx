import React from 'react';
import Livro from '../classes/modelo/Livro'; // Certifique-se de ajustar o caminho correto para o modelo Livro

interface LinhaLivroProps {
  livro: Livro;
  excluirLivro: (codigo: number) => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluirLivro }) => {
  const { codigo, resumo, autores, codEditora } = livro;

  return (
    <tr>
      <td>{codigo}</td>
      <td>{resumo}</td>
      <td>
        <ul>
          {autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>{codEditora}</td>
      <td>
        <button onClick={() => excluirLivro(codigo)}>Excluir</button>
      </td>
    </tr>
  );
};

export default LinhaLivro;