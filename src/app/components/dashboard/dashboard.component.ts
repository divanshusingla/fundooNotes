import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';
import * as $ from "jquery";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchText : any;
  email = localStorage.getItem('email');   
  name = localStorage.getItem('name');  
  constructor(@Inject(DataService) public dataSvc : DataService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    
  }

  search()
  {
    $( "#search" ).keyup(function() {
      this.searchText=  $( "#search" ).val();
    });
   
    
  }
}
