import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from '../user/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   userClaims: any;

  constructor(private router: Router/* , private userService: UserService */,private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit() {
    /* this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

    }); */
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.toastr.success('User registration successful');
    this.router.navigate(['/login']);
  }

}
