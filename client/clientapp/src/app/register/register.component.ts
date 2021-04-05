import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebService } from '../WebService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: any;
  flag: any;
  constructor(private api:WebService) { }

  userData=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    firstName:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
});

  ngOnInit(): void {
    
  }

  submitData2() {
    this.api.retriveRegister(this.userData).subscribe(response=>this.data=response);
    this.flag=1;
  }

}
