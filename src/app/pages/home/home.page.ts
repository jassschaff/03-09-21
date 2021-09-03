import { newArray } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  persona = new FormGroup({
    elRut: new FormControl(''),
    elNombreCompleto: new FormControl(''),
    laEdad: new FormControl('')
  });
  //creacion de arreglo de personas
lista_personas=new Array();
//crear un registro de personas
perso:any;
  grabar() {
    this.perso={
      rut: this.persona.controls.elRut.value,
      nombre: this.persona.controls.elNombreCompleto.value,
      edad: this.persona.controls.laEdad.value
    };
    this.lista_personas.push(this.perso);
    var datos = this.lista_personas;
    localStorage.setItem('misdatos',JSON.stringify(datos));
    alert("grabo");
  }

}
