import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
              <Link href="/">
                Página Inicial
              </Link>
            
              <Link href="/LivroLista">
                Lista de Livros
              </Link>
            
              <Link href="/LivroDados">
               Adicionar Livro
              </Link>
            
        </div>
      </div>
    </nav>
  );
};