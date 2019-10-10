import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import {AppMaterialModule} from './angularMaterial/angular.material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AppServiceService } from './services/httpService/app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NotesIconsComponent } from './components/notes-icons/notes-icons.component'; 
import {AuthGuardGuard} from './authGuard/auth-guard.guard';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { NoteMainComponent } from './components/note-main/note-main.component';
import { DialogNoteComponent } from './components/dialog-note/dialog-note.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
    

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    NotesComponent,
    NotesIconsComponent,
    DisplayNotesComponent,
    NoteMainComponent,
    DialogNoteComponent,
    ArchiveComponent,
    TrashComponent
  ],
  entryComponents : [DialogNoteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule

  ],
  providers: [AppServiceService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
