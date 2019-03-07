import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >=0)
            return {spaceErorr: true};
        return null; 
    }

    static checkUserAlreadyExists(control: AbstractControl) : ValidationErrors | null {
        console.log(control.value);
        if(control.value as string == 'conor') {
            console.log('Inside')
            return {checkUserAlreadyExists : true};
        }
        return null;
    }
}