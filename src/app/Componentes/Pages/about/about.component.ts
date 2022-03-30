import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/Services/info.service';
import { InfoPag } from 'src/app/interfaces/infoPag';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  equipo:any="";
  infoPag:InfoPag={};

  constructor(public infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getinfoEquipo()
    .subscribe((resp:any)=>{
      console.log(resp);
      this.equipo = resp;
      
  })

}}
