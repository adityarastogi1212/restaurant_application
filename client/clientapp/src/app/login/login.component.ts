import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormControl, FormGroup } from '@angular/forms';
import { WebService } from '../WebService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  flag: any;
  name: any;
  
  constructor(private api:WebService) {}

  userData=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
});

  ngOnInit(): void {
    
  }

  submitData1() {

    this.api.retriveLogin(this.userData).subscribe(response=>this.data=response);
    this.flag=1;
    setTimeout(() => this.forName(),1000);
  }

  forName() {
    if(this.data.status==true){
      this.name = this.userData.value.username;
      console.log(this.name);
    }
  }



}
