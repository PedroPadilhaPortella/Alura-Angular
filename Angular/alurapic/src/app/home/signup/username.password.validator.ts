import { FormGroup, ValidatorFn } from "@angular/forms";

// fazer uma validação que depende de dois campos
export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if(userName.trim() + password.trim()) 
        return userName != password ? null : { userNamePassword: true };
    else
        return null;
}