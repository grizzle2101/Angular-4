import { AbstractControl, ValidationErrors } from "../../../node_modules/@angular/forms";

export class PasswordValidators
{
    static checkPasswordExists(control: AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value == '1234')
                    resolve({checkPasswordExists: true});
                else if(control.value=='password')
                    reject({
                        value: control.value,
                        message: "Really Don't use that value..."
                    });
                else resolve(null);
            }, 5000);
        });
    }


    static passwordShouldMatch(control: AbstractControl)
    {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        console.log(newPassword , " - " , confirmPassword);

        if(newPassword.value !== confirmPassword.value)
        {
            console.log("Password do NOT Match...");
            return({passwordShouldMatch: true}); 
        }
        else
        {
            console.log("Password MATCH");
            return null;
        }
        
    }
}