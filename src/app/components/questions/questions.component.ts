import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  noteId : any;
  result : any;
  response : any;
  noteData : any;
  constructor(@Inject(NoteServiceService) private svc: NoteServiceService,@Inject(DataService) public dataSvc: DataService) {

   }

  ngOnInit() {
    this.dataSvc.currentquestion.subscribe((res) => {
      this.noteData = res;
      console.log("in the question and answer",this.noteData);
    });
  
    
    
  }


  // getNoteData()
  // {
  //   this.result = this.svc.getNoteData(this.noteId)
  //   this.result.subscribe((response) => {
  //     this.response = response;
  //     this.noteData = this.response.data.data;
  //     console.log("the result is ", this.noteData);
  //   });
  // }




}
