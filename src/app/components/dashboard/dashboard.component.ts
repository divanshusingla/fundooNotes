import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';
import { MatDialog } from '@angular/material';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchText: any;
  result: any;
  response: any;
  email = localStorage.getItem('email');
  name = localStorage.getItem('name');
  labels: any;
  constructor(@Inject(DataService) public dataSvc: DataService, @Inject(NoteServiceService) private svc: NoteServiceService, @Inject(MatDialog) private dialog: MatDialog) { }

  ngOnInit() {
    this.getNotesLabels();
    this.dataSvc.currentMessage.subscribe((res) => {
      this.getNotesLabels();
    });

  }
  
  getNotesLabels() {
    this.svc.getNoteLabelList().subscribe((response: any) => {
      this.labels = response.data.details.reverse();
      console.log(response.data.details);
    }, (error) => {
      console.log(error.statusText);
    });
  }

  logout() {
    localStorage.clear();

  }

  onKeyUp(event: any) {
    this.searchText = event.target.value;
    console.log(this.searchText);
    this.dataSvc.changeMessage(this.searchText)
  }

  onEdit() {
    // console.log("the daialog labels are",this.labels);
    // console.log("the value of note is ");
    let dialogref = this.dialog.open(EditDialogComponent);
    dialogref.afterClosed().subscribe(result => {
      console.log("dialog result ", result);
    })
  }
}
