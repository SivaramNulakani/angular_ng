import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "app/user/auth/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  /* user: User; */
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(/* private userService: UserService,*/ private router: Router,private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    /* this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    } */
  }

  OnSubmit(email, password) {
    /* this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
      }); */
    this.authService.signUpUser(email, password).then(data => {

      console.log(data)
      this.toastr.success('User registration successful');
      this.router.navigate(['/login']);

    }).catch(err => {
      console.log(err)
      this.toastr.error('User has been registered already')
    });
  }


}
