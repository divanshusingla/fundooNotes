import { Injectable, Inject } from '@angular/core';
import { AppServiceService } from '../httpService/app-service.service'

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  constructor(@Inject(AppServiceService) private svc: AppServiceService) { }

  receiveNotesData(data) {
    let url = 'notes/addNotes';
    let auth = true;
    return this.svc.post(data, url, auth);
  }

  getNotesData() {
    let url = 'notes/getNotesList';
    let auth = true;
    return this.svc.get(url, auth);
  }

  archiveNotes(data) {
    let url = 'notes/archiveNotes';
    let auth = true;
    return this.svc.post(data, url, auth);
  }

  trashNotes(data) {
    let url = 'notes/trashNotes';
    let auth = true;
    return this.svc.post(data, url, auth);
  }

  deleteForever(data) {
    let url = 'notes/deleteForeverNotes';
    let auth = true;
    return this.svc.post(data, url, auth);
  }

  editNote(data) {
    let url = 'notes/updateNotes';
    let auth = true;
    return this.svc.post(data, url, auth);
  }

  changeColor(data) {
    let url = 'notes/changesColorNotes';
    let auth = true;
    return this.svc.post(data, url, auth);
  }


archivedNotesList(){
  let url= 'notes/getArchiveNotesList'
  let auth = true;
  return this.svc.get(url,auth);
}

trashNotesList(){
  let url= 'notes/getTrashNotesList'
  let auth = true;
  return this.svc.get(url,auth);
}

getNoteLabelList()
{
  let url= 'noteLabels/getNoteLabelList'
  return this.svc.getNoteList(url);
}

addLabel(data)
{
  let url= 'noteLabels'
  let auth = true;
  return this.svc.post(data,url,auth);
}


deleteLabel(data)
{
  let id = data.id;
  console.log("data is is ",id)
  let url= 'noteLabels/' + id + '/deleteNoteLabel'
  return this.svc.deleteCall(url);
}

}
