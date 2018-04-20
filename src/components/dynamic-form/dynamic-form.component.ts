import { Component, Input } from "@angular/core";
import { QuestionBase } from './../../ts/question-base';
import { FormGroup } from "@angular/forms";

import { QuestionControlService } from "../../ts/question-control.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "dynamic-form.component.html"
})
export class DynamicFormComponent {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(public qcs: QuestionControlService) {
    
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    // only for testing
    // this.payLoad = JSON.stringify(this.form.value);
    
    
  }
}
