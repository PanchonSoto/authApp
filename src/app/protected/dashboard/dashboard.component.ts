import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    *{
      margin: 15px;
    }
  `
  ]
})
export class DashboardComponent {

  get usuario(){
    return this.auths.usuario;
  }

  constructor(private router: Router, private auths: AuthService) { }

  logout(){
    this.router.navigateByUrl('/auth');
    this.auths.logout();
  }

}
