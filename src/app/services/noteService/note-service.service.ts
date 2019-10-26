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


updateNoteLabel(data)
{
  let id = data.id;
  console.log("data is is ",id)
  let url= 'noteLabels/' + id + '/updateNoteLabel';
  let auth = true;
  return this.svc.post(data,url,auth);
}

addLabelToNotes(data){
  let url= 'notes/'+data.noteId+'/addLabelToNotes/'+data.labelId+'/add';
  let auth=true;
  return this.svc.post(data,url,auth)
}



getNotesByLabel(label)
{
  let url= 'notes/getNotesListByLabel/' + label.labelName
  let auth = true;
  return this.svc.post(label,url,auth);
}

deleteLabelFromNotes(Obj){
  let url= 'notes/' + Obj.noteId + '/addLabelToNotes/' + Obj.id + '/remove'
  let auth = true;
  return this.svc.post(Obj,url,auth);
}

addReminderToNOte(data)
{
  let url = 'notes/addUpdateReminderNotes';
  let auth = true;
  return this.svc.post(data,url,auth);
}


deleteReminderFromNotes(data)
{
  let url = 'notes/removeReminderNotes';
  let auth = true ;
  return this.svc.post(data,url,auth);
}

addCollaborator(data)
{
  let url = 'notes/' + data.noteId + '/AddcollaboratorsNotes';
  let auth = true;
  return this.svc.post(data,url,auth);
}

getCollaborators(data)
{
  let url = 'notes/' + data.noteId;
  let auth = true;
  return this.svc.patch(data,url);
}


deleteCollaborators(data)
{
  let url = 'notes/' + data.noteId + '/removeCollaboratorsNotes/' + data.userId;
  return this.svc.deleteCall(url);
}

getNoteData(data)
{
  let url = 'notes/getNotesDetail/' + data;
  let auth = true;
  return this.svc.get(url,auth);
}

}
