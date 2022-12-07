import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeatureSectionData } from 'src/app/models/feature-section-data.model';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit {
  @Output() public featureCreated: EventEmitter<FeatureSectionData> = new EventEmitter<FeatureSectionData>()
  @Input() public destaqueData!: FeatureSectionData;

  public featureDataModel: FeatureSectionData = {
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
  }


  ngOnInit(){
    this.featureCreated.emit(this.featureDataModel)
  }
}
