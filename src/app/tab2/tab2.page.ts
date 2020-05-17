import { Component } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  productos=[
    {
      nombre:'Xiaomi M9T',
      src: '/assets/img/institucional.jpg',
      descripcion: 'El Xiaomi Mi 9T es una variante del Mi 9 '
    },
    {
      nombre:'Xiaomi M9',
      src: '',
      descripcion: 'El Xiaomi Mi 9 es una variante del Mi 9 con una pantalla Full HD+ de 6.39 pulgadas. Con un procesador Snapdragon 730 de ocho núcleos, el Xiaomi Mi 9T tiene 6GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno no expandible. La cámara principal del Xiaomi Mi 9T es triple, en configuración 48 MP + 8 MP + 13 MP, mientras que su cámara para selfies es de 20 MP y asoma en el frente mediante un mecanismo motorizado. El Xiaomi Mi 9T completa sus características con lector de huellas integrado en la pantalla, batería de 4000 mAh con carga rápida, audio HiFi, y corre MIUI 10 basado en Android 9.0 Pie.'
    },
    {
      nombre:'Redmi Note 8',
      src: '',
      descripcion: 'El Xiaomi Redmi Note 8 marca la octava generación de la serie Redmi Note, esta vez con una pantalla Full HD+ de 6.3 pulgadas y potenciado por un procesador Snapdragon 665 de ocho núcleos. Con opciones de 4GB de memoria RAM y 64GB de almacenamiento, 6GB de RAM y 64GB de almacenamiento o 6GB de RAM y 128GB de almacenamiento, el Redmi Note 8 cuenta con una cámara cuádruple en su posterior de 48 MP + 8 MP + 2 MP + 2 MP, y su cámara para selfies es de 13 megapixels. El Redmi Note 8 completa sus características con una batería de 4000 mAh con soporte para carga rápida, lector de huellas montado en su parte posterior, resistencia a salpicaduras y corre MIUI 10 basado en Android 9.0 Pie.'
    },
  ]
  constructor(public alertCtr: AlertController,public actinSheetC:ActionSheetController) {}

  async presentAlert(producto) {
    const alert = await this.alertCtr.create({
      message:`<ion-card>
      <ion-card-header color="primary">
        <ion-card-title>${producto.nombre}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      ${producto.descripcion}
    </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-img src="${producto.src}"></ion-img>
    </ion-card>`,
     
      backdropDismiss: false,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            
          }
        }
      ]
    });

    await alert.present();
}
async presentActionSheet() {
  const actionSheet = await this.actinSheetC.create({
    header: 'Opciones de usuario',
    backdropDismiss: false,
    buttons: [{
      text: 'Eliminar',
      role: 'destructive',
      icon: 'trash',
      cssClass: 'texto_rojo',
      handler: () => {
        console.log('Accion: Eliminar');
      }
    }, {
      text: 'Compartir',
      icon: 'share',
      handler: () => {
        console.log('Accion: Compartir');
      }
    }, {
      text: 'Favoritos',
      icon: 'heart',
      handler: () => {
        console.log('Accion: Fvoritos');
      }
    
    }]
  });
  await actionSheet.present();
}
}
