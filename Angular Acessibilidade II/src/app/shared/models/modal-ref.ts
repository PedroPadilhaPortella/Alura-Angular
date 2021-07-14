import { ComponentRef } from "@angular/core";
import { ModalComponent } from "../components/modal/modal.component";

export class ModalRef {

    constructor(private componentRef: ComponentRef<ModalComponent>) {}

    public close(): void {
        console.log('modal closed')
        this.componentRef.destroy();
    }
}