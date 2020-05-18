import { Component } from '@angular/core';
interface su{
  nombre:String,
  direccion: String,
  telefono: String,
  src: String
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  matriz:su={
    nombre:'Matriz',
    direccion: 'Quitumbe ñan y Condor ñan oe21-254',
    telefono: '265894734',
    src: '/assets/img/matriz.jpg'
  }
  sucursal=[
    this.matriz,
    {
      nombre:'Napo',
      direccion: 'Napo y alpahuasi s11-523',
      telefono: '2664090',
      src: '/assets/img/napo.jpg'
    },
    {
      nombre:'Rio Coca',
      direccion: 'Rio coa y 6 de diciembre n96-44',
      telefono: '26619872',
      src: '/assets/img/rio.jpg'
    },
  ]

  constructor() {}
  
}
