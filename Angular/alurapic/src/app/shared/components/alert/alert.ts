export class Alert {

    constructor( public readonly alertType: AlertType, public readonly message: string) {}
}

export enum AlertType
{
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    INFO = 'info'
}