import { Component, OnInit } from '@angular/core';


interface MenuItem{
  ruta: String;
  texto: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li{
      cursor: poiner;
    }

  `]
})
export class MenuComponent  {

menu: MenuItem[] = [
{ruta: '/graficas/barra', texto: 'Barras'},
{ruta: '/graficas/barra-doble', texto: 'Barras Dobles'},
{ruta: '/graficas/dona', texto: 'Dona'},
{ruta: '/graficas/dona-http', texto: 'Dona Http'},

];




}
