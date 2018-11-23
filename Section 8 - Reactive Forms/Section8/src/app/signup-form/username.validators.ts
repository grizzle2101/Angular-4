import { AbstractControl, ValidationErrors } from "../../../node_modules/@angular/forms";
import { resolve } from "url";

export class UsernameValidators
{
    //Normal Validation
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >=0)
            return {cannotContainSpace: true};

        return null; 
    }

    //Asynchronous Validation
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve, reject) => { //Resolve & Reject go to THIS code block.
            setTimeout(() => {
                if(control.value == 'mosh')
                    resolve({shouldBeUnique: true}); //We use Resolve to return the value to the Consumer/Observer.
                else if(control.value=='user')
                    reject({
                        value: control.value,
                        message: "Could not Retrieve Value..."
                    });//Throws Complex Error Object
                else resolve(null);
            }, 5000);
        });
    }
}