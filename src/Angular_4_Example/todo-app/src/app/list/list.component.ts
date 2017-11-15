import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	private newNote: string;

  constructor() { }

  ngOnInit() {
  }

  private onAddNote(){
  	console.log(this.newNote);
  }

}
