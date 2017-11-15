import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Note } from '../../../common/note.type';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css'],
  providers: [ApiService]
})
export class ViewListComponent implements OnInit {

	private aNote: Note;

  constructor(private activatedRoute: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit() {
  	console.log('list view init');
  	this.aNote = new Note();
  	this.activatedRoute.params.subscribe((params: Params) => {
        let listId = params['listId'];
        this._apiService.getNote(listId)
		      .then((notes) => {
		        console.log(notes);
		      });
      });
  };

  private onUpdate(){

  };	

}
