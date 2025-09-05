import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
}
