import { Component, OnInit } from '@angular/core';
import { HttpGeneralService } from '../shared/http-service/http-general.service';
import {UrlConstants} from 'src/app/shared/constants/api-route.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpService:HttpGeneralService) { 
    this.get();
  }

  ngOnInit(): void {
  }

  get(){
    this.httpService.get(UrlConstants.get).subscribe(
      data=>{
      }
    );
  }
}
