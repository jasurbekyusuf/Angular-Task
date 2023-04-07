import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.scss'],

})
export class InheritanceComponent {

  myForm!: FormGroup;

  propertyAmountValue: number = 0;
  genderValue: boolean = false;
  hasFatherValue: boolean = false;
  hasMotherValue: boolean = false;
  hasHusbandValue: boolean = false;
  hasWifeValue: boolean = false;
  numberOfSonsValue: number = 0;
  numberOfDaughtersValue: number = 0;
  numberOfPaternalBrothersValue: number = 0;
  numberOfPaternalSistersValue: number = 0;
  numberOfMaternalBrothersValue: number = 0;
  numberOfMaternalSistersValue: number = 0;
  public inheritance: any;
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      propertyAmount:[0, [
        Validators.required,
        Validators.minLength(1)]],
      gender:['male'],
      hasFather:['no'],
      hasMother:['no'],
      hasHusband:['no'],
      hasWife:['no'],
      numberOfSons:[0],
      numberOfDaughters:[0],
      numberOfPaternalBrothers:[0],
      numberOfPaternalSisters:[0],
      numberOfMaternalBrothers:[0],
      numberOfMaternalSisters:[0]
    })
  }

  calculateInheritance(){
    console.log(this.myForm.value);

    this.propertyAmountValue = this.myForm.get('propertyAmount')?.value;
    this.genderValue= this.myForm.get('gender')?.value;
    this.numberOfSonsValue = this.myForm.get('numberOfSons')?.value;
    this.numberOfDaughtersValue = this.myForm.get('numberOfDaughters')?.value;
    this.numberOfPaternalBrothersValue = this.myForm.get('numberOfPaternalBrothers')?.value;
    this.numberOfPaternalSistersValue = this.myForm.get('numberOfPaternalSisters')?.value;
    this.numberOfMaternalBrothersValue = this.myForm.get('numberOfMaternalBrothers')?.value;
    this.numberOfMaternalSistersValue = this.myForm.get('numberOfMaternalSisters')?.value;
  }

  clearForm() {
    this.propertyAmountValue = 0;
    this.genderValue = false;
    this.hasFatherValue = false;
    this.hasMotherValue = false;
    this.hasHusbandValue = false;
    this.hasWifeValue = false;
    this.numberOfSonsValue = 0;
    this.numberOfDaughtersValue = 0;
    this.numberOfPaternalBrothersValue = 0;
    this.numberOfPaternalSistersValue = 0;
    this.numberOfMaternalBrothersValue = 0;
    this.numberOfMaternalSistersValue = 0;
  }
}
