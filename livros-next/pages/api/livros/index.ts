import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros'; // Importe o controlador de livros

const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const livros = controleLivro.obterLivros();
    res.status(200).json(livros);
  } else if (req.method === 'POST') {
    const novoLivro = req.body;
    controleLivro.incluir(novoLivro);
    res.status(200).json({ mensagem: 'Livro adicionado com sucesso.' });
  } else {
    res.status(405).end();
  }
};