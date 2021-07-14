import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/models/modal-ref';
import { ModalService } from './shared/services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    @ViewChild('modal') modalTemplateRef: TemplateRef<any>;
    public modalRef: ModalRef;
    public FirstName = 'Pedro';
    public info = false;
    public form: FormGroup;

    constructor(private modalService: ModalService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            surName: ['', Validators.required],
            age: ['', Validators.required],
            info: [false]
        })
    }

    public show(): void {
        this.modalRef = this.modalService.open({ templateRef: this.modalTemplateRef, title: 'User Details' });
    }

    public close(): void {
        this.modalRef.close()
    }

    public submit(): void {
        if (this.form.invalid)  return;

        console.log(this.form.value)
        this.close();
    }
}
