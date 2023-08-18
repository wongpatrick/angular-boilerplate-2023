import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, 
        Validators.minLength(3),
        forbiddenNameValidator(/Patrick/i)
      ]),
      altName: new FormControl("", [this.testValidation()])
    });
  }

  testValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!control.parent) {
        return null
      }
      const forbidden = control.value == this.myForm.get('name')!.value;
      return forbidden ? { forbidden: { message: "Name and AltName Cannot be the same " } } : null;
    };
  }

  // constructor(private formBuilder: FormBuilder) {}
  get name() { return this.myForm.get('name'); }
  get altName() { return this.myForm.get('altName'); }


  submitForm() {
    if (this.myForm.valid) {
      // Perform form submission logic here
      console.log('Form submitted:', this.myForm.value);
    }
  }
}