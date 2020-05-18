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
      nombre:'Xiaomi Mi 10 pro',
      src: '/assets/img/mi10pro.jpg',
      descripcion: 'Xiaomi estrena en sus terminales el procesador Snapdragon 865 de Qualcomm, este procesador, lleva incluido un módem X55 5G NSA/SA, con lo que contamos con esa nueva tecnología de conectividad en todos sus modelos. No solo eso, sino que incorpora WiFi 6, IEEE 802.11 ax, el último estándar Wi-Fi. Esta tecnología, permite mayores velocidades y una mayor conectividad simultánea de dispositivos. Gracias a la incorporación de tecnologías Mu-Mimi, modulación QAM y 8*8 MIMO, teóricamente, con Wifi 6, podríamos alcanzar velocidades de hasta 9.6Gbps mejorando incluso su distancia de conexión en interiores y exteriores, todo ello cuando contemos con Puntos de acceso que trabajen con este protocolo. '
    },
    {
      nombre:'Xiaomi Mi 9T',
      src: '/assets/img/mi9t.png',
      descripcion: 'El Xiaomi Mi 9 es una variante del Mi 9 con una pantalla Full HD+ de 6.39 pulgadas. Con un procesador Snapdragon 730 de ocho núcleos, el Xiaomi Mi 9T tiene 6GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno no expandible. La cámara principal del Xiaomi Mi 9T es triple, en configuración 48 MP + 8 MP + 13 MP, mientras que su cámara para selfies es de 20 MP y asoma en el frente mediante un mecanismo motorizado. El Xiaomi Mi 9T completa sus características con lector de huellas integrado en la pantalla, batería de 4000 mAh con carga rápida, audio HiFi, y corre MIUI 10 basado en Android 9.0 Pie.'
    },
    {
      nombre:'Redmi Note 9 pro',
      src: '/assets/img/rnote9pro.jpg',
      descripcion: 'El Xiaomi Redmi Note 9 Pro es parte de la nueva generación de la serie Redmi Note de Xiaomi. Con una pantalla Full HD+ de 6.67 pulgadas, el Redmi Note 9 Pro está potenciado por un procesador Snapdragon 720G acompañado de variantes de 4GB de memoria RAM y 64GB de almacenamiento, o bien 6GB de memoria RAM con 128 GB de almacenamiento interno, expandible vía microSD. La cámara principal del Redmi Note 9 Pro es cuádruple, con lentes de 48 MP, 8 MP, 2 MP y 2 MP, mientras que su cámara para selfies es de 16 megapixels. Completando las características del Redmi Note 9 Pro encontramos una batería de 5020 mAh con soporte de carga rápida, lector de huellas montado de costado, y MIUI 11 basado en Android 10 como sistema operativo.'
    },
    {
      nombre:'Xiaomi Pocophone F1',
      src: '/assets/img/pocof1.jpg',
      descripcion: 'Pantalla: 6.18 pulgadas Relación de aspecto: 18.7:9Resolución: 2,2246 x1,080 pixeles Procesador: Snapdragon 845 RAM: 6/8GB Almacenamiento: 64GB/128GB/256GB Cámara principal: Doble de 12 y 5 megapixeles Cámara frontal: 20 megapixeles Batería: 4,000mAh con carga rápida Quick Charge 3.0 Sistema operativo: Android 8.1 Oreo con MIUI for POCO Conectividad: USB Tipo C, LTE, Bluetooth 5.0, GPS, Dual SIM, Reconocimiento facial por infrarrojos'
    },
    {
      nombre:'Xiaomi Mi 9T pro',
      src: '/assets/img/mi9tpro.png',
      descripcion: 'El Xiaomi Mi 9T Pro es una variante más avanzada del Mi 9T, con una pantalla AMOLED Full HD+ de 6.39 pulgadas y potenciado por un procesador Snapdragon 855 de ocho núcleos, acompañado de 6GB de memoria RAM y 64GB o 128GB de almacenamiento interno no expandible. Con una cámara triple de 48 MP + 8 MP + 13 MP en su parte posterior, el Xiaomi Mi 9T Pro cuenta con una cámara pop-up de 20 megapixels para selfies, que asoma mediante mecanismo motorizado para evitar el notch en la pantalla. Asimismo, el Xiaomi Mi 9T Pro aloja en su pantalla al sensor de huellas integrado, y completa sus características técnicas con una batería de 4000 mAh con carga rápida, puerto USB-C, y corre MIUI 10 basado en Android 9.0 Pie.'
    },
    {
      nombre:'Redmi Note 8',
      src: '/assets/img/rnote8.jpg',
      descripcion: 'El Xiaomi Redmi Note 8 marca la octava generación de la serie Redmi Note, esta vez con una pantalla Full HD+ de 6.3 pulgadas y potenciado por un procesador Snapdragon 665 de ocho núcleos. Con opciones de 4GB de memoria RAM y 64GB de almacenamiento, 6GB de RAM y 64GB de almacenamiento o 6GB de RAM y 128GB de almacenamiento, el Redmi Note 8 cuenta con una cámara cuádruple en su posterior de 48 MP + 8 MP + 2 MP + 2 MP, y su cámara para selfies es de 13 megapixels. El Redmi Note 8 completa sus características con una batería de 4000 mAh con soporte para carga rápida, lector de huellas montado en su parte posterior, resistencia a salpicaduras y corre MIUI 10 basado en Android 9.0 Pie.'
    },
    {
      nombre:'Redmi Note 9',
      src: '/assets/img/rnote8.jpg',
      descripcion: 'El Xiaomi Redmi Note 9 es un smartphone Android con una pantalla Full HD+ de 6.53 pulgadas y potenciado por un procesador Mediatek Helio G85, acompañado de variantes de 3GB de memoria RAM con 64GB de espacio de almacenamiento interno o 4GB de RAM con 128GB de almacenamiento. La cámara trasera del Redmi Note 9 es cuádruple, de 48 MP + 8 MP + 2 MP + 2 MP, mientras que su cámara frontal es de 13 MP. El Redmi Note 9 completa sus características con una batería de 5020 mAh de carga rápida, lector de huellas posterior, y MIUI 11 basado en Android 10.'
    },{
      nombre:'Redmi Note 8 pro',
      src: '/assets/img/rnote8pro.jpg',
      descripcion: 'El Xiaomi Redmi Note 8 Pro es el smartphone más poderoso de la octava serie Redmi Note. El Redmi Note 8 Pro cuenta con una pantalla Full HD+ de 6.53 pulgadas, y está potenciado por un procesador Mediatek Helio G90T de ocho núcleos con variantes de 6GB de memoria RAM y 64GB de espacio de almacenamiento, o 8GB de memoria RAM con 64GB o 128GB de almacenamiento interno. La cámara posterior del Redmi Note 8 Pro es cuádruple, de 64 MP + 8 MP + 2 MP + 2 MP, mientras que su cámara selfie es de 20 MP. El Redmi Note 8 Pro completa sus características con protección Gorilla Glass 5 y certificación IP52 a prueba de agua, puerto USB-C, NFC, batería de 4500 mAh con carga rápida, sistema de enfriamiento líquido para mantener la temperatura del procesador controlada y corre MIUI 10 basado en Android 9 Pie.'
    },
    {
      nombre:'Xiaomi Pocophone F2',
      src: '/assets/img/pocof2.jpg',
      descripcion: 'Encontrar el mejor precio para el Xiaomi Pocophone F2 no es una tarea fácil. Aquí encontrarás donde comprar el Xiaomi Pocophone F2 en España y latinoamérica al mejor precio. Rastreamos constantemente los precios en más de 100 tiendas, como Amazon, El Corte Inglés, Carrefour, Media Markt y PC Componentes para que puedas encontrar la tienda de confianza con el mejor precio.'
    },
    {
      nombre:'Xiaomi Mi A3',
      src: '/assets/img/mia3.jpg',
      descripcion: 'El Xiaomi Mi A3 es la tercera generación de la serie A con la misma filosofía que sus predecesores: actualizaciones directas de Google gracias al programa Android One y un precio competitivo. En cuanto al hardware, encontramos en el Xiaomi Mi A3 una pantalla AMOLED de 6.01 pulgadas a resolución HD+. Considerando que sus predecesores contaban con resolución 1080p, esto cuenta como downgrade. Por dentro del Xiaomi Mi A3 tenemos un procesador Snapdragon 665 de ocho núcleos acompañado de 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno expandible. El Mi A3 se luce con su cámara posterior triple de 48 MP + 8 MP + 2 MP, y su cámara para selfies de 32 MP. Completando sus especificaciones, el Xiaomi Mi A3 cuenta con una batería de 4030 mAh con soporte de carga rápida, lector de huellas integrado bajo la pantalla, radio FM y Android 9.0 Pie.'
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
