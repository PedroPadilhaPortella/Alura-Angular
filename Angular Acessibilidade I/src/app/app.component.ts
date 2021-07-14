import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'a11y-p1';
    public label = 'Are you good enough in Angular?';
    public form: FormGroup = null;
    public teste: string = null;

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            yesNoAnswer: [{
                value: null, disabled: false
            }]
        })
    }

    public submit() {
        this.form.get('yesNoAnswer').disable();
        console.log(this.form.value)
    }
}