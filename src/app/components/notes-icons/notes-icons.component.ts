import { Component, OnInit,Inject, Input } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import {DataService} from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-notes-icons',
  templateUrl: './notes-icons.component.html',
  styleUrls: ['./notes-icons.component.scss']
})
export class NotesIconsComponent implements OnInit {
 @Input() noteid : any;
  result : any;
  response : any;
  colorArray: any = [
    {color:'#ECEEEE'}, {color:'#F28B82'}, {color:'#F7BC04'}, {color:'#FAF474'}, 
    {color:'#CBFF90'}, {color:'#AAFEEB'}, {color:'#CBF0F8'},{color: '#ADCBFA'},
    {color:'#D7AEFB'}, {color:'#FDCFE8'}, {color:'#E6C9A8'},{color: '#FFFFFF'}];

  constructor(@Inject(NoteServiceService) private svc : NoteServiceService,@Inject(DataService) private dataSvc : DataService) { }

  ngOnInit() {
  }

  archiveNotes(id)
  {
    let archive = 
    {
      isArchived : true,
      noteIdList : [id]
    }

    let options=
    {
      data : archive,
      url : 'archiveNotes'
    }
    this.result = this.svc.postwithToken(options)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
  }

  trashNotes(id)
  {
    let trash = 
    {
      isDeleted : true,
      noteIdList : [id]
    }

    let options=
    {
      data : trash,
      url : 'trashNotes'
    }
    this.result = this.svc.postwithToken(options)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
  }

}
