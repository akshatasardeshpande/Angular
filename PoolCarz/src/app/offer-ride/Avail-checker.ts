import { FormGroup } from "@angular/forms";


export function AvailChecker(controlName: number){
    let seatsA : any = [0,1,2,3,4,5,6,7,8];
    
    return (formGroup: FormGroup) =>{
        if(seatsA.value !== controlName){
            seatsA.setErrors({mustMatch: true})
        }else{
            seatsA.setErrors(null);
        }

    }
}


// export  function PasswordChecker (controlName: string, CompareControlName: string) 
// {
//     return (formGroup: FormGroup) => {
//         const password = formGroup.controls[controlName];
//         const confPassword = formGroup.controls[CompareControlName];

//         if(password.value !== confPassword.value){
//             confPassword.setErrors({mustMatch: true})
//         }else{
//             confPassword.setErrors(null);
//         }
//     }
// }
// Seats should be greater than 0 & lesser than 8