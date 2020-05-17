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
    telefono: '2658947',
    src: '/assets/img/institucional.jpg'
  }
  sucursal=[
    this.matriz,
    {
      nombre:'Quitumbe',
      direccion: 'Quitumbe ñan y Condor ñan oe21-254',
      telefono: '2658947',
      src: '/assets/img/institucional.jpg'
    },
    {
      nombre:'Napo',
      direccion: 'Quitumbe ñan y Condor ñan oe21-254',
      telefono: '2658947',
      src: '/assets/img/institucional.jpg'
    },
  ]

  constructor() {}
  
}
