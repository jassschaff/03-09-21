import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.page.html',
  styleUrls: ['./ejemplo1.page.scss'],
})
export class Ejemplo1Page implements OnInit {

  constructor( private alertController: AlertController) { }

  ngOnInit() {
    this.listar();
  }
//mensaje alerta de ejemplo
async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
//mensaje de alerta para eliminar
async AlertaConfirmarEliminar(rut:String) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Eliminar',
    message: 'Desea eliminar rut <strong>'+rut+ '</strong>!!!',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Eliminar',
        handler: () => {
          console.log('Confirm Okay');
          this.eliminar(rut);
        }
      }
    ]
  });

  await alert.present();
}


  lista_personas = [{
    rut: 1,
    nombre: "juan",
    edad: 33
  },
  {
    rut: 2,
    nombre: "aldo",
    edad: 55
  },
  {
    rut: 3,
    nombre: "maria",
    edad: 66
  }
  ];
  //metodos
  eliminar(rut:String) {
    alert('selecciono eliminar ' + rut);
  }
  actualizar(rut:String) {
    alert('selecciono actualizar ' + rut);
  }
  listar(){
    var datos= localStorage.getItem('misdatos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    alert(datos);
  }
}
