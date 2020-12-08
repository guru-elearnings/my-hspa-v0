import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  //template: `<h1>Hi .. this is test</h1>`,
  templateUrl: 'property-card.component.html',
  // styles:['h1 {font-weight:normal;}']
  styleUrls: ['property-card.component.css'],
})
export class PropertyCardComponent {
  Property: any = {
    id: 1,
    Name: 'My House',
    Type: 'House',
    Price: 1200,
  };
}
