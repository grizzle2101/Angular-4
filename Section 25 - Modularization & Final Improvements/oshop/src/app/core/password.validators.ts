import {AbstractControl} from '@angular/forms';


export class PasswordValidators {

    static checkValidPassword(control: AbstractControl) {
        let confirm = control.value;
        console.log('VALUE:', confirm);
        if(control.value != '1234') return({checkValidPassword: true});
        return null;
    }

    static passwordsShouldMatch(control: AbstractControl) {
        return null;
    }
}