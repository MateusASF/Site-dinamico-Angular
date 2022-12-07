import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FooterData } from 'src/app/models/footer-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() public footerData!: FooterData;
  @Output() elementCreated: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.elementCreated.emit("carrosel")
  }


}
