import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [FormComponent]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('Valid form', () => {
    let name = component.myForm.controls['name'];
    name.setValue("Annie")
    let altName = component.myForm.controls['altName']
    altName.setValue("AnnieWay")

    expect(component.myForm.valid).toBeTruthy();
  });

  it('Name is required', () => {
    let altName = component.myForm.controls['altName']
    altName.setValue("Annie")
    expect(component.myForm.valid).toBeFalsy();
  });

  it('Name is min length validation', () => {
    let name = component.myForm.controls['name'];
    name.setValue("An") 
    let altName = component.myForm.controls['altName']
    altName.setValue("Annie")
    expect(component.myForm.valid).toBeFalsy();
  });

  it('Name cannot be Patrick', () => {
    let name = component.myForm.controls['name'];
    name.setValue("Patrick") 
    let altName = component.myForm.controls['altName']
    altName.setValue("Annie")
    expect(component.myForm.valid).toBeFalsy();
  });

  it('AltName is not required', () => {
    let name = component.myForm.controls['name'];
    name.setValue("Annie") 
    expect(component.myForm.valid).toBeTruthy();
  });

  it('AltName and Name cannot be the same', () => {
    let name = component.myForm.controls['name'];
    name.setValue("Annie")
    let altName = component.myForm.controls['altName']
    altName.setValue("Annie")
    expect(component.myForm.valid).toBeFalsy();
  });
});
