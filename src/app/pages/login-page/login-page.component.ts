import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  login() {
    console.log('datos del user', this.user)
    this.authService.login(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          console.log('respuesta', res)
          this.router.navigate(['/home'])
        },
        err => {
          console.log('error', err)
          console.log('datos user', this.user)
        }
      )
  }

}
