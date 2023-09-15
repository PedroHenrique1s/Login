import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

  public formAuth: FormGroup = this.formBuilder.group({
    email: [ '', [Validators.required, Validators.email]],
    password: [ '', [Validators.required]],
  });
  constructor(private formBuilder: FormBuilder){}

  public submitForm(){
    if(this.formAuth.valid){
      console.log(this.formAuth);
    }
  }
}
