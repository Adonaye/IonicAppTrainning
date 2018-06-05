import { Component, Input } from '@angular/core';

/**
 * Generated class for the FormListSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-list-search',
  templateUrl: 'form-list-search.html'
})
export class FormListSearchComponent {

  @Input() formList: Array<any>;
  text: string;

  constructor() {
    this.text = '';
  }

}
