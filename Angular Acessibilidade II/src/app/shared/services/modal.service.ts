import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';
import { ModalComponent } from '../components/modal/modal.component';
import { BodyInjectorService } from './body-injector.service';
import { ModalRef } from '../models/modal-ref';

@Injectable()
export class ModalService {

    private componentFactory: ComponentFactory<ModalComponent>;

    constructor(
        private injector: Injector, 
        componentFactoryResolver: ComponentFactoryResolver, 
        private bodyInjectorService: BodyInjectorService
    ){
        this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
    }
    
    public open(config: ModalConfig): ModalRef {
        const componentRef = this.createComponentRef();
        componentRef.instance.config = config;
        this.bodyInjectorService.stackBeforeAppRoot(componentRef);
        const modalRef = new ModalRef(componentRef);
        componentRef.instance.modalRef = modalRef;
        return modalRef;
    }
    
    private createComponentRef(): ComponentRef<ModalComponent> {
        return this.componentFactory.create(this.injector);
    }
}