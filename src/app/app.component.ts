import { Component } from '@angular/core';
import 'rxjs';
import { AuthenticationService,UserService } from './_services';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  // template:``
})
export class AppComponent {
  pagetitle: string = "The Inventory ";

  isUserLoggedIn: boolean = false;

  constructor(private authenticationService: AuthenticationService,private userService : UserService,
    private route: ActivatedRoute,
    private router: Router ) {
    this.authenticationService.getTheBoolean().subscribe(value => {
      console.log(value);
      this.isUserLoggedIn = value;
    }
    );
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}

