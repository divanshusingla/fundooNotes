import { Component, OnInit, Inject } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import {Note} from '../../models/note.model';
import {DataService} from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
notes : Note;
options : any;
message : String;


  constructor(@Inject(NoteServiceService) private svc : NoteServiceService,@Inject(DataService) private dataSvc : DataService) { }

  ngOnInit() {
    this.getNoteData();
    this.dataSvc.currentMessage.subscribe((res:any)=>
    {
      this.getNoteData();
    })
    

  }


getNoteData()
{
this.options =
  {
    url : 'getNotesList',
  }
  this.svc.getWithTokens(this.options).subscribe((response : any) =>
  {
    // console.log('response form the getnote data',response);
    this.notes = response.data.data;
  },(error)=>{
    console.log(error);
  });
}

}
