import { CadastroData } from './../../models/cadastro-data.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { States } from 'src/app/models/states-data.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  // @Output() public formDataOutput: EventEmitter<CadastroData> = new EventEmitter<CadastroData>()

  ngOnInit(): void {
    this.createForm()
  }

  public formCadastro!: CadastroData;
  public formData!: FormGroup;

private createForm(): void {
  this.formData = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    cpf: new FormControl(''),
    nascimento: new FormControl(''),

    endereco: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),

    contato: new FormGroup({
      telefone: new FormControl(''),
      email: new FormControl(''),
    }),

    username: new FormControl(''),
    senha: new FormControl(''),
  });
}

public states: States[] = [
  {"nome": "Acre", "sigla": "AC"},
  {"nome": "Alagoas", "sigla": "AL"},
  {"nome": "Amapá", "sigla": "AP"},
  {"nome": "Amazonas", "sigla": "AM"},
  {"nome": "Bahia", "sigla": "BA"},
  {"nome": "Ceará", "sigla": "CE"},
  {"nome": "Distrito Federal", "sigla": "DF"},
  {"nome": "Espírito Santo", "sigla": "ES"},
  {"nome": "Goiás", "sigla": "GO"},
  {"nome": "Maranhão", "sigla": "MA"},
  {"nome": "Mato Grosso", "sigla": "MT"},
  {"nome": "Mato Grosso do Sul", "sigla": "MS"},
  {"nome": "Minas Gerais", "sigla": "MG"},
  {"nome": "Pará", "sigla": "PA"},
  {"nome": "Paraíba", "sigla": "PB"},
  {"nome": "Paraná", "sigla": "PR"},
  {"nome": "Pernambuco", "sigla": "PE"},
  {"nome": "Piauí", "sigla": "PI"},
  {"nome": "Rio de Janeiro", "sigla": "RJ"},
  {"nome": "Rio Grande do Norte", "sigla": "RN"},
  {"nome": "Rio Grande do Sul", "sigla": "RS"},
  {"nome": "Rondônia", "sigla": "RO"},
  {"nome": "Roraima", "sigla": "RR"},
  {"nome": "Santa Catarina", "sigla": "SC"},
  {"nome": "São Paulo", "sigla": "SP"},
  {"nome": "Sergipe", "sigla": "SE"},
  {"nome": "Tocantins", "sigla": "TO"}
]

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.formCadastro = this.formData.getRawValue()
    console.log(this.formCadastro)
    this.formData.reset();

    //this.formDataOutput.emit(this.formCadastro)
  }

  // @Output() public sendFromCadastro: EventEmitter<CadastroData> = new EventEmitter<CadastroData>()

  // public btnDisabled = false;

  // public formCadastro: CadastroData = {
  //   nome: '',
  //   cpf: '',
  //   nascimento: "",
  //   endereco: {
  //     zipCode: '',
  //     street: '',
  //     number: 0,
  //     complement: '',
  //     district: '',
  //     city: '',
  //     state: '',
  //   },
  //   contato: {
  //     telefone: '',
  //     email: ''
  //   },
  //   username: '',
  //   senha: ''
  // };

  // public submitForm(): void {
  //   this.sendFromCadastro.emit(this.formCadastro);
  // }
}
