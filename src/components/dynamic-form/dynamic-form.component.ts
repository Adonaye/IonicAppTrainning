import { Component, Input, OnChanges, SimpleChange, OnInit } from "@angular/core";
import { QuestionBase } from './../../ts/question-base';
import { FormGroup } from "@angular/forms";

import { QuestionControlService } from "../../ts/question-control.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "dynamic-form.component.html"
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(public qcs: QuestionControlService) {

  }
  
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  /* ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(!changes['questions'].firstChange) {
      this.form = this.qcs.toFormGroup(this.questions); 
    }
  } */

  onSubmit() {
    // only for testing
    // this.payLoad = JSON.stringify(this.form.value);

    console.log(this.form.value);
  }
}
