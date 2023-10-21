import { ReactNode } from 'react';
class Livro {
    static resumo: ReactNode;
    static título: ReactNode;
    static codigo: ReactNode;
    constructor(
      public codigo: number,
      public codEditora: number,
      public titulo: string, 
      public resumo: string,
      public autores: string[]
    ) {}
  }
  
  export default Livro;