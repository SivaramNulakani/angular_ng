import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from "app/user/auth/auth.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoginError: boolean = false;
  constructor(/* private userService: UserService,*/private toaster : ToastrService ,private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  OnSubmit(email, password) {
    //    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
    //     localStorage.setItem('userToken',data.access_token);
    //     this.router.navigate(['/home']);
    //   },
    //   (err : HttpErrorResponse)=>{
    //     this.isLoginError = true;
    //   });
    // }

    this.authService.signInUser(email, password).then(data => {
      console.log(data)
      this.router.navigate(['/home']);
    }).catch(err => {
      console.log('error ===>'+err)
      this.toaster.error('Invalid credentials')
    });

  }
}
