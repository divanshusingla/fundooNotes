import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Note} from '../../models/note.model';
import {NoteServiceService} from './../../services/noteService/note-service.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-notes',
g  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  show: boolean = true;
  response: any;
  result: any;
  title = new FormControl;
  description = new FormControl;
  note:Note = new Note();

  toggle()
  {
    this.show = !this.show;
   
  }

  constructor(@Inject(NoteServiceService) private svc : NoteServiceService,@Inject(DataService) private datasvc : DataService) { }
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
        description : this.description.value
      }
      let obj={
        data: this.note,
        url: 'addNotes'
      }
  
      this.result=this.svc.postwithToken(obj)
      this.result.subscribe((response) => {
        this.response = response;
        this.datasvc.changeMessage("Hello from Sibling")
        console.log(this.response);
      
      });
      this.toggle();
    }
  
  }
}
