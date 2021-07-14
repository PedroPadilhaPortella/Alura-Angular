import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { userNamePassword } from './username.password.validator';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('inputEmail', { static: true }) inputEmail: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        },
            {
                // fazer uma validação que depende de dois campos.
                validator: [userNamePassword]
            }
        );
        this.platformDetectorService.IsPlatformBrowser() && this.inputEmail.nativeElement.focus();
    }

    signup() {
        if (!this.signupForm.invalid || !this.signupForm.pending) {
            const newUser = this.signupForm.getRawValue() as NewUser;
            this.signUpService.signup(newUser).subscribe(
                () => this.router.navigate(['']),
                (err) => console.log(err)
            );
        }
    }
}