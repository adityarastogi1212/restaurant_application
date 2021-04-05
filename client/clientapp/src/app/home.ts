import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { WebService } from "./WebService";

@Component({
    selector:'home-comp',
    templateUrl:'./home.html',
    })

export class home implements OnInit
{
    data:any;
    flag:any;
    constructor(private api:WebService){}
    userData=new FormGroup({
        name:new FormControl(''),
        brand:new FormControl(''),
        price:new FormControl(''),
    });
    ngOnInit()
    {
       this.api.retriveData(this.userData).subscribe(response=>this.data=response);
       //this.flag=0;
    }
    submitData()
    {
        this.api.retriveData(this.userData).subscribe(response=>this.data=response);
        this.flag=1;
        
    }
    file:any;
    onFileChanged(event)
    {
        this.file=event.target.files[0]
        
    }
    newdata:any;

    
}