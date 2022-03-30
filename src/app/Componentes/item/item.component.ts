import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id:any;
  producto:any;

  constructor(private route: ActivatedRoute,
    
    private ProductsService: ProductsService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.ProductsService.getProduct(this.id)
    .subscribe((resp:any)=>{
      console.log(resp);
      this.producto = resp;
    })
  }

}
