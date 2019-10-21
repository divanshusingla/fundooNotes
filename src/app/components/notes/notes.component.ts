import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Note} from '../../models/note.model';
import {NoteServiceService} from './../../services/noteService/note-service.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  component = "mainnotes";
  show: boolean = true;
  response: any;
  result: any;
  titleMo : any;
  descriptionMo : any;
  title = new FormControl;
  description = new FormControl;
  note:Note = new Note();
  toggle()
  {
    this.show = !this.show;
   
  }
  
  constructor(@Inject(NoteServiceService) private svc : NoteServiceService,@Inject(DataService) private datasvc : DataService ) { }
  ngOnInit() {
  }
  receiveData(){

    if(this.title.value == null && this.description.value == null)
    {
      this.toggle();
    }
    else{
      this.note = {
        title : this.title.value,
        description : this.description.value,
        service: "basic"
      }
      this.result=this.svc.receiveNotesData(this.note)
      this.result.subscribe((response) => {
        this.response = response;
        console.log(this.response);
        this.datasvc.changeMessage("Hello from Sibling")      
      });
      this.toggle();
      this.titleMo = "";
      this.descriptionMo = "";
    }
  }
}
