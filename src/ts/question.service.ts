import { Injectable } from "@angular/core";

import { DropdownQuestion } from "./question-dropdown";
import { QuestionBase } from "./question-base";
import { TextboxQuestion } from "./question-textbox";
import { CheckboxQuestion } from './question-checkbox';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: "brave",
        label: "Bravery Rating",
        required: true,
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: "firstName",
        label: "First name",
        value: "Bombasto",
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2
      }),

      new CheckboxQuestion({
        key: 'agree',
        label: 'I Agree',
        value: 'false',
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
