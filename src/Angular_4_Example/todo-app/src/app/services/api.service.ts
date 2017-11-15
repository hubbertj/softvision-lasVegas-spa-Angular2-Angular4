import { Injectable } from '@angular/core';
import { Note } from '../common/note.type';

@Injectable()
export class ApiService {

  constructor() { }

  //saving the note to local storage
  public saveNote(note: Note){
  	return new Promise((resolve, reject) => {
  		var notes = [];
  		if(localStorage.getItem('notes')){
  			notes = JSON.parse(localStorage.getItem("notes")); 
    	}
    	notes.push(note);
    	localStorage.setItem('notes', JSON.stringify(notes));
    	if(localStorage.getItem('notes')){
    		resolve(notes);
    	}else{
    		reject('Something when saving notes!');
    	}
	  });
  };

  public getNote(note: Note){
  	return new Promise((resolve, reject) => {
  		var notes = [];
  		if(localStorage.getItem('notes')){
  			var aNotes = JSON.parse(localStorage.getItem("notes"));
  			for(var x in aNotes){
  				let note = new Note();
				note.copyInto(aNotes[x]);
  				notes.push(note);
  			}
  			resolve(notes); 
    	}
  		console.log(note);
  		resolve(true);
  	});
  };

  //get our current notes;
  public getNotes(){
  	return new Promise((resolve, reject) => {
  		var notes = [];
  		if(localStorage.getItem('notes')){
  			var aNotes = JSON.parse(localStorage.getItem("notes"));
  			for(var x in aNotes){
  				let note = new Note();
				note.copyInto(aNotes[x]);
  				notes.push(note);
  			}
  			resolve(notes); 
    	}
    	resolve(notes);
	  });
  }
}
