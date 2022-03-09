import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url =  environment.baseUrl;

  constructor(private http : HttpClient) { }

  //private url ='https://microservicenode.azurewebsites.net/';

  getData():Observable<any[]>{
    return this.http.get<any[]>(this.url+'product/Get/');
  }

  saveData(product:any){
    return this.http.post(this.url+'product/Create/', product);
  }


  updateData(product:any){
    return this.http.put(this.url+'product/Update/'+product._id,product);
  }

  deleteData(product:any){
    return this.http.delete(this.url+'product/Delete/'+product);
  }

}
