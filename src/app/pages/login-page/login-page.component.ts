import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user = {
    email: '',
    password:''
  }

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.user)
      .subscribe(
        res => {
          console.log('respuesta', res)
        },
        err => {
          console.log('error', err)
        }
      )
  }

}
