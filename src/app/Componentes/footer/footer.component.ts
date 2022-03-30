import { Component, OnInit } from '@angular/core';
import { InfoPag } from 'src/app/interfaces/infoPag';
import { InfoService } from '../../Services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fecha: any = new Date();
  infoPag:InfoPag={};
  anio: any;
  constructor(public infoService: InfoService) { 
    console.log(this.fecha);
    this.anio = this.fecha.getFullYear();
  }

  ngOnInit(): void {

    this.infoService.getinfoPag()
    .subscribe((resp:InfoPag)=>{
      this.infoPag = resp;
    })
  
}

}
