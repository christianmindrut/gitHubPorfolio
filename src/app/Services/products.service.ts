import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { 

    
  }
  public getProductsIdx(){
    return this.http.get('https://pruebapract1-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json');
}

public getProducts(){
  return this.http.get('https://pruebapract1-default-rtdb.europe-west1.firebasedatabase.app/productos.json');
}

public getProduct(id: string){

  return this.http.get(`https://pruebapract1-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);


}

}
