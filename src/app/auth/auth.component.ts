import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../angular-material/material.module';

@Component({
  selector: 'app-auth',
  imports: [MaterialModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  private codigoAlumno = '';
  private password = '';

  constructor(private router: Router) {}

  onCodigoAlumnoChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.codigoAlumno = inputElement.value;
  }

  onPasswordChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.password = inputElement.value;
  }

  login() {
    const validCodigo = 'PI73184012';
    const validPassword = '16051996';

    if (this.codigoAlumno === validCodigo && this.password === validPassword) {
      sessionStorage.setItem('codigoAlumno', this.codigoAlumno);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Código de alumno o contraseña incorrectos');
    }
  }
}
