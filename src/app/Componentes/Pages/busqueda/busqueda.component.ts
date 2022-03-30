import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  textoBusq: any='';

  productos: any =[ ];
  productos_encontrados:any=[];

  loading=true;

  constructor( private productsService: ProductsService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.textoBusq = this.activeRoute.snapshot.paramMap.get('textoBusq')
    this.textoBusq = this.textoBusq.toLowerCase();

    this.productsService.getProductsIdx()
    .subscribe((resp:any)=>{
      this.productos = resp;

      this.productos.forEach((prod:any)=>{
        let categoria = prod.categoria.toLowerCase();
        if(categoria.indexOf(this.textoBusq)>=0) {
          this.productos_encontrados.push(prod);
        }

      });
      setTimeout(() => {
        this.loading=false;
      }, 2000);
     
    })
  }

}