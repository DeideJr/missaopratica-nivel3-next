import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros'; 

const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const codigoLivro = Number(req.query.codigo);
    controleLivro.excluir(codigoLivro);
    res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
  } else {
    res.status(405).end();
  }
};