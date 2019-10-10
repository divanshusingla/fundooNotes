import { Component, OnInit, Inject } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import {Note} from '../../models/note.model';
import {DataService} from 'src/app/services/dataService/data.service';
import {MatDialog} from '@angular/material';
import { DialogNoteComponent } from '../dialog-note/dialog-note.component';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes : Note;
  options : any;
  message : String;
    constructor(@Inject(NoteServiceService) private svc : NoteServiceService,@Inject(DataService) private dataSvc : DataService,@Inject(MatDialog) private dialog : MatDialog) { }
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
      this.notes = response.data.data.reverse();
      this.notes = this.filterData(this.notes);
    },(error)=>{
      console.log(error);
    });
  }
  
  
  filterData(data)
  {
    var result = data.filter(function(note)
    {
      return (note.isDeleted == true && note.isArchived == false);
    })
    return result;
  }
  
  
  openDialog(note)
  {
    console.log("the value of note is ", note);
    let dialogref = this.dialog.open(DialogNoteComponent,
      {
        data : {
          title : note.title ,
          description : note.description,
          id : note.id
        }
      });
    dialogref.afterClosed().subscribe(result=> {
      console.log("dialog result ", result);
    })
  }

}
