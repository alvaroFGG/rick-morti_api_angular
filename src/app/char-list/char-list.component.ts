import { Component, OnInit } from '@angular/core';
import { RequestApiService } from './services/request-api.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss']
})
export class CharListComponent implements OnInit {
  allChars:any;

  page:number = 1;

  constructor(private requestApiService:RequestApiService) { }

  ngOnInit(): void {
    
    this.requestApiService.getChars(this.page)
    .subscribe((data:any) => {
      this.allChars = data.results;
    });
    
  }

  nextPage():void{

    this.page++;
    this.requestApiService.getChars(this.page)
    .subscribe((data:any) => {
      this.allChars = data.results;
    });

  }

  previousPage():void{

    if (this.page <= 1){
      alert('No hay personajes más atras');
    }else{
      this.page--;
      this.requestApiService.getChars(this.page)
      .subscribe((data:any) => {
        this.allChars = data.results;
      });
    }
    
  }


  

}
