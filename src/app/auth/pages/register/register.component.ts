import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import  Swal  from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authS: AuthService) { }


  registrar() {
    const { nombre, email, password } = this.miFormulario.value;

    this.authS.registro(nombre,email,password)
      .subscribe(ok=>{
        ok === true ? this.router.navigateByUrl('/dashboard')  : Swal.fire('Error', ok, 'error');
    })
    this.router.navigateByUrl('/dashboard');
  }
}
