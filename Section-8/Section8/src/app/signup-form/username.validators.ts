import { AbstractControl, ValidationErrors } from "../../../node_modules/@angular/forms";

//Task 1 - Create Validator Class
export class UsernameValidators
{
    //Task 2 - Create Validator Method
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >=0)
            return {cannotContainSpace: true};

        return null; //Else Do Nothing.
    }
}


/*
//Returning More Complex Data
return {minLegth: {
    requiredLength: 10,
    actualLength: control.value.length
}}
*/