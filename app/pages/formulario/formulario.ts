import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';

/*
  Generated class for the FormularioPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/formulario/formulario.html',
})
export class FormularioPage {
  myForm: ControlGroup;


  constructor(
    private nav: NavController,
    private formBuilder: FormBuilder
    ) {
      this.myForm = this._createMyForm();
  }
  //metodo donde almacenar los datos
  saveData(){
    console.log(this.myForm.value);
  }

 //metodo de validaciones 
  private _createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', Validators.required],
      dateBirth:['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }
}
