import { Component, OnInit, Inject, Input } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-more-verticle-icon',
  templateUrl: './more-verticle-icon.component.html',
  styleUrls: ['./more-verticle-icon.component.scss']
})
export class MoreVerticleIconComponent implements OnInit {
  @Input() noteid: any;
  @Input() mat : any;
  result: any;
  response: any;
  constructor(@Inject(NoteServiceService) private svc: NoteServiceService, @Inject(DataService) private dataSvc: DataService) { }

  ngOnInit() {
  }

  trashNotes(id) {
    let trash =
    {
      isDeleted: true,
      noteIdList: [id]
    }
    this.result = this.svc.trashNotes(trash)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("Note is deleted");
  }

  restoreNote(noteid)
  {
    let restore = 
    {
      isDeleted : false,
      noteIdList : [noteid]
    }
    this.result = this.svc.trashNotes(restore)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
  }

  deleteForever(noteid)
  {
    let delFor = 
    {
      isDeleted : true,
      noteIdList : [noteid]
    }
    this.result = this.svc.deleteForever(delFor)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
  }

}
