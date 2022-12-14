import { CadastroData } from './models/cadastro-data.model';
import { Component } from '@angular/core';
import { AddressSectionData } from './models/address-section-data.model.data';
import { AppData } from './models/app-data.model';
import { ContactFormData } from './models/contact-form-data.model';
import { FeatureSectionData } from './models/feature-section-data.model';
import { SearchModel } from './models/search-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'site';

  public data: AppData = {
    features: {
      sectionTitle: 'Destaques',
      feature1: {
        image: 'feature1.png',
        title: 'Destaque 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor arcu, malesuada eget posuere et.'
      },
      feature2: {
        image: 'feature2.png',
        title: 'Destaque 2',
        text: 'Aenean laoreet, felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat nunc lacus ut sapien.'
      },
      feature3: {
        image: 'feature3.png',
        title: 'Destaque 3',
        text: 'Aenean non eros congue leo consectetur fermentum. Quisque ut dignissim tortor, eget porttitor magna.'
      },
      feature4: {
        image: 'feature4.png',
        title: 'Destaque 4',
        text: 'Duis id odio dapibus, finibus tortor eget, cursus nunc. Morbi egestas nisl orci, in cursus ipsum cursus et.'
      }
    },
    about: {
      sectionTitle: 'Sobre a empresa',
      text: '<p>Lorem ipsum dolor sit ame, consectetur adipiscing elit. Ut dolor arcu, malesuada eget posuere et, aliquam non elit. Sed maximus ullamcorper dui, ac sollicitudin quam molestie ac. Aenean laoreet, felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat nunc lacus ut sapien. Aliquam velit justo, vestibulum et augue ut, efficitur ultrices justo. Aenean non eros congue leo consectetur fermentum. Quisque ut dignissim tortor, eget porttitor magna. Etiam sem turpis, aliquam sit amet nisi non, bibendum finibus neque.</p>'
    },
    address: {
      sectionTitle: "Endereço",
      data: {
        street: "Rua Luiz Galvez",
        number: 254,
        complement: "3º andar, sala 306",
        state: "AC",
        city: "Rio Branco",
        district: "Conjunto Castelo Branco",
        zipCode: "69911-262"
      }
    },
    footer: {
      info: '&copy;2022 Todos os direitos reservados.'
    }
  }


  onElementCreated(element: string): void {
    console.log('Elemento criado: ', element)
  }

  onAddressCreated(addressDataModel: AddressSectionData): void {
    console.log('Seção Endereço criada: ', addressDataModel)
  }

  onContactFormSubitted(formData: ContactFormData): void {
    console.log('Formulário enviado com sucesso: ', formData)
  }

  onCadastrotFormSubitted(formData: CadastroData): void {
    console.log('Perfil cadastrado com sucesso: ', formData)
  }

  onFeatureCreated(featureDataModel: FeatureSectionData): void {
    console.log('Seção Destaques criada: ', featureDataModel)
  }

  onSubmtitSearch(event: SearchModel): void {
    console.log('Pesquisa do usuário: ', event)
  }

}
