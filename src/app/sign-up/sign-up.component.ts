import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlContainer, FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  name = '';
  password = '';
  signupForm = {
    name: this.name,
    password: this.password,
  };

  constructor(private userservice: UserService) {}

  onSubmit(signupForm: ControlContainer) {
    this.userservice.createUser(signupForm.value).subscribe({
      next: (data) => console.log(data),
    });
  }
}
