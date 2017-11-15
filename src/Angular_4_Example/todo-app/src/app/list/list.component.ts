import { Component, OnInit } from '@angular/core';
import { Note } from '../common/note.type';
import { ApiService } from '../services/api.service';
import { Router} from '@angular/router';

//libs
import * as _ from 'underscore';

//make sure to add your service into providers.
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ApiService]
})

export class ListComponent implements OnInit {

	private aNote: Note;
  private notes: Note[] = [];

  constructor(private _apiService: ApiService, private _router:Router) { }

  ngOnInit() { 
    console.log('list init');
    this.aNote = new Note();
    this._apiService.getNotes()
      .then((notes) => {
        this.notes = notes as Note[];
      });
  };

  private onAddNote(){
    this.aNote.id = this.generateNoteId();
    this._apiService.saveNote(this.aNote);

    //back to default note;
    this.aNote = new Note();
    this._apiService.getNotes()
      .then((notes) => {
        this.notes = notes as Note[];
      });
  };

  private generateNoteId(){
    return +(_.uniqueId().toString() + _.uniqueId().toString() + _.uniqueId().toString() + _.uniqueId().toString());
  };

  private viewList(note: Note){
    if(note){
      this._router.navigateByUrl('/list/' + note.id);
    }
  };

}
