import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchModel } from 'src/app/models/search-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sendSearch: EventEmitter<SearchModel> = new EventEmitter<SearchModel>()
  @Output() elementCreated: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.elementCreated.emit("header")
  }

  public pesquisaUser: SearchModel = {
    search: ""
  }

  public submitSearch(): void {
    this.sendSearch.emit(this.pesquisaUser);
  }
}
