
import { Component, OnInit, Input } from '@angular/core';
import { video } from '../../../shared/models/search.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() videos: video[];

  constructor() { }

  ngOnInit() {
  }
}