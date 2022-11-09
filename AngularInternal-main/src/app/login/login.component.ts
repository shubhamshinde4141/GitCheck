import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm!: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userLoginForm= this.formBuilder.group({
      
      username: ['', Validators.required],
      password:['', Validators.required],
    });
  }

  onSubmit(){
    console.log(this.userLoginForm.value)
    console.log("Form Work !")
  }

}
