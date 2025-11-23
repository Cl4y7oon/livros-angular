import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Melhoramentos' },
    { codEditora: 2, nome: 'Salamandra' },
    { codEditora: 3, nome: 'Companhia das Letras' }
  ];

  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.codEditora === codEditora);
    return editora.length > 0 ? editora[0].nome : '';
  }
}
