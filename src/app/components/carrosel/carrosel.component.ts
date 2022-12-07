import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent implements OnInit {
@Output() elementCreated: EventEmitter<string> = new EventEmitter<string>()

ngOnInit(): void {
  this.elementCreated.emit("carrossel")
}
  public images: Array<string> = [];

}
