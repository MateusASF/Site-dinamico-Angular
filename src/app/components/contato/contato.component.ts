import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactFormData } from 'src/app/models/contact-form-data.model';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>()

  public btnDisabled = false;

  public formData: ContactFormData = {
    email: "teste@teste.com",
    message:  "Amei seu site e gostaria de aprender mais de como ser um ótimo Dev!"
  };

  public submitForm(): void {
    this.sendForm.emit(this.formData);
  }

  // public showInputData(event: any): void {
  //   console.log(event.target.value)
  // }
}
