import { useState } from 'react';
import Head from 'next/head';
import {Menu} from '../componentes/Menu';
import ControleEditora from '../classes/controle/ControleEditora';
import Livro from '../classes/modelo/Livro';
import { useRouter } from 'next/router';
import '../src/app//globals.css';
const LivroDados: React.FC = () => {
  const controleEditora = new ControleEditora();
  const baseURL = "http://localhost:3000/api/livros";
  const navigate = useRouter();

  const incluirLivro = async (livro: Livro) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });

    if (response.ok) {
      navigate.push('/LivroLista');
    } else {
      console.error('Erro ao adicionar o livro.');
    }
  };

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(opcoes[0].value);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(parseInt(event.target.value));
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const autoresArray = autores.split('\n').map(a => a.trim());

    const novoLivro: Livro = {
      codigo: 0, 
      titulo,
      resumo,
      autores: autoresArray,
      codEditora,
    };

    incluirLivro(novoLivro);
  };

  return (
    <div className="container">
      <Head>
        <title>Livro Dados</title>
      </Head>
      <Menu />
      <main className="main">
        <h1 className="title">Página de Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div className="form-group">
            <label>Título:</label>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Resumo:</label>
            <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Autores (separados por linha):</label>
            <textarea value={autores} onChange={(e) => setAutores(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Editora:</label>
            <select value={codEditora} onChange={tratarCombo}>
              {opcoes.map(opcao => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn">Adicionar Livro</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;