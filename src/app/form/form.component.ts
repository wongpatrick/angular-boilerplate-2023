import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

  constructor(private formBuilder: FormBuilder) {}

  submitForm() {
    if (this.myForm.valid) {
      // Perform form submission logic here
      console.log('Form submitted:', this.myForm.value);
    }
  }
}