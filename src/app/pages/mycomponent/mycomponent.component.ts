import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'mycomponent',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./mycomponent.scss')],
    template: require('./mycomponent.html'),
})
export class MyComponent {

    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;

    constructor(fb: FormBuilder) {
        console.log('In my component');
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    public onSubmit(values: Object): void {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            console.log(values);
        }
    }
}
