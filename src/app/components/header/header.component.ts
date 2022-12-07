import { Component, EventEmitter, Output } from '@angular/core';
import { SearchModel } from 'src/app/models/search-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() public sendSearch: EventEmitter<SearchModel> = new EventEmitter<SearchModel>()

  public pesquisaUser: SearchModel = {
    search: ""
  }

  public submitSearch(): void {
    this.sendSearch.emit(this.pesquisaUser);
  }
}
