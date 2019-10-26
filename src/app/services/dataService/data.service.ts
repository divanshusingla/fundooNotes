import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  private viewSource = new BehaviorSubject('default view');
  private questionAnswers = new BehaviorSubject('default question');
  currentMessage = this.messageSource.asObservable();
  currentView = this.viewSource.asObservable();
  currentquestion = this.questionAnswers.asObservable();
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  changeView(message : string)
  {
    this.viewSource.next(message)
  }

  changeQuestion(message : any = [])
  {
    this.questionAnswers.next(message);
  }



}
