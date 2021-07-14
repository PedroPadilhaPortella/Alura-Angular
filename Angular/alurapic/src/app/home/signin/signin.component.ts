import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('userNameInput', { static: true }) userNameInput: ElementRef<HTMLInputElement>;
    fromUrl: string;


    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router,
                private platformDetectorService: PlatformDetectorService,
                private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl'])

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        if(this.platformDetectorService.IsPlatformBrowser()) this.userNameInput.nativeElement.focus();
    }
    
    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName, password).subscribe(
                () => {
                    this.fromUrl? this.router.navigateByUrl(this.fromUrl) : this.router.navigate(['user', userName])
                },
                (err) => {
                    console.log(err);
                    this.loginForm.reset();
                    if(this.platformDetectorService.IsPlatformBrowser()) this.userNameInput.nativeElement.focus();
                    alert("Inválid User or Password!")
                }
            );
    }
}
