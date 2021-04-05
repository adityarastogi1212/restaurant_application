import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map } from  'rxjs/operators';

@Injectable(
    {
        providedIn:'root'
    }
)

export class WebService
{
    constructor(private http:HttpClient){}

    //default_url:any="http://127.0.0.1:5000/";
    image_url:string="http://127.0.0.1:5000/uploadimage";
    download_image_url:string="http://127.0.0.1:5000/downloadqrcode";
    view_menu_url:string="http://127.0.0.1:5000/viewmenu";

    retriveData(webData:any)
    {
        console.log(webData.value);
        let headers;// = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        let body = { data:webData.value };
        return  this.http.post<any>('http://127.0.0.1:5000/', body, {headers});
       // return this.http.get(this.default_url);
    }
    public sendFormData(formData)
   {
       return this.http.post<any>(this.image_url,formData,{
           reportProgress:true,
           observe:'events'
       });
   }
    downloadqrData(imageData)
    {
        return this.http.post<any>(this.download_image_url,imageData,{reportProgress:true,observe:'events'});
    }
    viewMenuData()
    {
        return this.http.post<any>(this.view_menu_url,{reportProgress:true,observe:'events'});
    }

    retriveLogin(webData:any)
    {
        console.log(webData.value);
        let headers;// = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        let body = webData.value;
        return this.http.post<any>('https://restaurantserverside.herokuapp.com/login', body, {headers});
       // return this.http.get(this.default_url);
    }

    retriveRegister(webData:any)
    {
        console.log(webData.value);
        let headers;// = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        let body = webData.value;
        return this.http.post<any>('https://restaurantserverside.herokuapp.com/register', body, {headers});
       // return this.http.get(this.default_url);
    }
    
}