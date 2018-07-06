import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [``]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: ''
  };

  paises: Object = [
    {
      codigo: 'PER',
      nombre: 'Peru'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    }
  ];

  sexos: string[] = ['Hombre', 'Mujer'];

  constructor() { }

  ngOnInit() {
  }

  guardar( forma: NgForm ) {
    console.log('Formulario guardado');
    console.log('NgForm', forma);
    console.log('Valor', forma.value);

    console.log('usuario', this.usuario);
  }

}
