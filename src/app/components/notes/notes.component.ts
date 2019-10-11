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
  show: boolean = true;
  response: any;
  result: any;
  title = new FormControl;
  description = new FormControl;
  note:Note = new Note();
  archivevalue = "true";
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
      let obj={
        data: this.note,
        url: 'addNotes'
      }
  
      this.result=this.svc.postwithToken(obj)
      this.result.subscribe((response) => {
        this.response = response;
        console.log(this.response);
        this.datasvc.changeMessage("Hello from Sibling")      
      });
      this.toggle();
    }
  
  }
}
