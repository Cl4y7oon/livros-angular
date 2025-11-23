import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'O Menino Maluquinho',
      resumo: 'A história de um menino traquinas que aprontava muita confusão. Alegria da casa, liderava a garotada, era sabido e um amigão. Fazia versinhos, canções, inventava brincadeiras. Toda a criançada o adorava. Menino maluquinho, diziam. Mas na verdade ele não era maluquinho não. Era feliz!',
      autores: ['Ziraldo']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Marcelo, Marmelo, Martelo',
      resumo: 'Marcelo é um menino muito curioso e inteligente. Ele gosta de inventar palavras novas e descobrir o significado das coisas. Uma história que mostra como a criatividade e a imaginação podem transformar o mundo ao nosso redor.',
      autores: ['Ruth Rocha']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'A Arca de Noé',
      resumo: 'Uma coletânea de poemas infantis escritos por Vinicius de Moraes, incluindo o famoso poema sobre a arca de Noé e seus animais. Versos divertidos e musicais que encantam crianças e adultos há gerações.',
      autores: ['Vinicius de Moraes']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codigo)) + 1
      : 1;
    livro.codigo = codigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
