import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedIds = 0;
    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

    public getNumberOfGeneratedIds(): number {
        return this.numberOfGeneratedIds;
    }

    public generateUniqueIdWithPrefix(prefix): string {
        if(!this.validId.test(prefix) || !prefix) 
            throw Error("Prefix can not be empty.");

        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds++;
        return `${prefix}-${uniqueId}`;
    }

    private generateUniqueId(): string {
        return uuidv4();
    }
}