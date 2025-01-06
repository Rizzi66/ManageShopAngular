import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ControlContainer, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  name = '';
  password = '';
  signinForm = {
    name: this.name,
    password: this.password,
  };

  constructor(private userservice: UserService) {}

  onSubmit(signinForm: ControlContainer) {
    this.userservice.logUser(signinForm.value).subscribe({
      next: (data) => console.log(data),
    });
  }
}
