import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarroselComponent } from './components/carrosel/carrosel.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
import { SobreEmpresaComponent } from './components/sobre-empresa/sobre-empresa.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarroselComponent,
    DestaquesComponent,
    SobreEmpresaComponent,
    EnderecoComponent,
    ContatoComponent,
    FooterComponent,
    ButtonComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    //NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
