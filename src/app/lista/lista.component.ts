import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  mostrarLista: boolean = true;
  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
}
