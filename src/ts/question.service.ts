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
        key: "tipo",
        label: "Tipo de usuario",
        required: true,
        options: [
          { key: "invitado", value: "Invitado" },
          { key: "lab", value: "Laboratorista" },
          { key: "admin", value: "Adminsitrador" },
          { key: "superadmin", value: "Super administrador" }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: "name",
        label: "Nombre de usuario",
        value: "",
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: "emailAddress",
        label: "Email",
        type: "email",
        required: true,
        order: 2
      }),

      new CheckboxQuestion({
        key: 'agree',
        label: '¿Está de acuerdo con el uso de la aplicación?',
        value: 'false',
        required: true,
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
