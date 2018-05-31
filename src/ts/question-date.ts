import { QuestionBase } from './question-base';

export class DateQuestion extends QuestionBase<string> {
    controlType = 'date';
    format: string;

    constructor(options: {} = {}) {
        super(options);
        this.format = options['format'] || '';
    }
}