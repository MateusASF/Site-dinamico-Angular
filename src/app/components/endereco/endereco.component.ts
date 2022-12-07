import { AddressData } from './../../models/addres-data-models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressSectionData } from 'src/app/models/address-section-data.model.data';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  @Output() public addressCreated: EventEmitter<AddressSectionData> = new EventEmitter<AddressSectionData>()
  @Input() public addressData!: AddressSectionData;


  public addressDataModel: AddressSectionData = {
    sectionTitle: "Endereço",
    data: {
    street: "Rua Luiz Galvão",
    number: 254,
    complement: "apto 34 bl 4",
    state: "SP",
    city: "São Paulo",
    district: "Nova Cidade",
    zipCode: "08762-123"
    }
  }

  constructor() {}
  ngOnInit(){
    this.addressCreated.emit(this.addressDataModel)
  }


}
