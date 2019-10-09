import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-icons',
  templateUrl: './notes-icons.component.html',
  styleUrls: ['./notes-icons.component.scss']
})
export class NotesIconsComponent implements OnInit {

  colorArray: any = [
    {color:'#ECEEEE'}, {color:'#F28B82'}, {color:'#F7BC04'}, {color:'#FAF474'}, 
    {color:'#CBFF90'}, {color:'#AAFEEB'}, {color:'#CBF0F8'},{color: '#ADCBFA'},
    {color:'#D7AEFB'}, {color:'#FDCFE8'}, {color:'#E6C9A8'},{color: '#FFFFFF'}];

  constructor() { }

  ngOnInit() {
  }

}
