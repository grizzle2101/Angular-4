import { AbstractControl, ValidationErrors } from "../../../node_modules/@angular/forms";

export class UsernameValidators
{

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >=0)
            return {cannotContainSpace: true};

        return null; 
    }

    //Task 1 - Create New Validator
    static shouldBeUnique(control: AbstractControl) : ValidationErrors | null
    {
        //Task 2 - Simulate Asynchonous Operation
        setTimeout(() => {
            if(control.value == 'mosh')
            return {shouldBeUnique: true};
        return null;
        }, 2000);

        return null; // Will Always Return Null...
    }
}


/*
//Returning More Complex Data
return {minLegth: {
    requiredLength: 10,
    actualLength: control.value.length
}}
*/