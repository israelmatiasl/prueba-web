import { FormGroup } from "@angular/forms";

export class Functions {

    public IsFieldInvalid(field:string, fG:FormGroup){
        return !fG.get(field).valid && fG.get(field).touched;
    }

    public DisplayFieldCss(field:string, fG:FormGroup){
        return { 'is-invalid': this.IsFieldInvalid(field, fG) };
    }

}