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
  select: any = [0, 1, 2, 3, 4];

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

  resultB: number = 0;
  resultS: number = 0;
  resultD: number = 0;
  resultM: number = 0;
  resultF: number = 0;
  resultW: number = 0;
  resultSi: number = 0;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      propertyAmount:[0, [
        Validators.required,
        Validators.minLength(1)]],
      hasFather:[false],
      hasMother:[false],
      hasHusband:[false],
      hasWife:[false],
      numberOfSons:[0],
      numberOfDaughters:[0],
      numberOfPaternalBrothers:[0],
      numberOfPaternalSisters:[0],
      numberOfMaternalBrothers:[0],
      numberOfMaternalSisters:[0]
    })
  }
  calculate(){
    console.log(this.myForm.value);

    this.propertyAmountValue = this.myForm.get('propertyAmount')?.value;
    this.genderValue= this.myForm.get('gender')?.value;
    this.numberOfSonsValue = this.myForm.get('numberOfSons')?.value;
    this.hasFatherValue = this.myForm.get('hasFather')?.value;
    this.hasMotherValue = this.myForm.get('hasMother')?.value;
    this.hasHusbandValue = this.myForm.get('hasHusband')?.value;
    this.hasWifeValue= this.myForm.get('hasWife')?.value;
    this.numberOfDaughtersValue = this.myForm.get('numberOfDaughters')?.value;
    this.numberOfPaternalBrothersValue = this.myForm.get('numberOfPaternalBrothers')?.value;
    this.numberOfPaternalSistersValue = this.myForm.get('numberOfPaternalSisters')?.value;
    this.numberOfMaternalBrothersValue = this.myForm.get('numberOfMaternalBrothers')?.value;
    this.numberOfMaternalSistersValue = this.myForm.get('numberOfMaternalSisters')?.value;
  }
  calculateInheritance(){

    this.calculate();

    if(this.numberOfDaughtersValue > 0)
      {

        this.resultD = (this.propertyAmountValue - (+this.hasMotherValue ? this.resultM = (this.propertyAmountValue / 6) : this.resultM = 0) - (this.hasFatherValue ? (this.resultF = this.propertyAmountValue/ 6) : this.resultF = 0) - (+this.hasWifeValue? this.resultW = this.propertyAmountValue / 8 : this.resultW = 0)) / (2 * this.numberOfSonsValue + this.numberOfDaughtersValue)
      }
      else {this.resultD = 0}

      if(this.numberOfSonsValue > 0)
      {
        this.resultS = 2 * (this.propertyAmountValue - (+this.hasMotherValue ? this.resultM = this.propertyAmountValue / 6 : this.resultM = 0) - (this.hasFatherValue ? (this.resultF = this.propertyAmountValue / 6) : this.resultF = 0) - (+this.hasWifeValue? this.resultW = this.propertyAmountValue / 8 : this.resultW = 0)) / (2 * this.numberOfSonsValue + this.numberOfDaughtersValue)

      }else { this.resultS = 0 }

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

    this.resultB = 0;
    this.resultS = 0;
    this.resultD = 0;
    this.resultM = 0;
    this.resultF = 0;
    this.resultW = 0;
    this.resultSi = 0;
  }

  calculateSon(): void {
    if (this.numberOfSonsValue > 0 && !this.hasFatherValue && !this.hasMotherValue && !this.hasWifeValue) {
      this.resultS = 2 * (this.propertyAmountValue / (2 * this.numberOfSonsValue + this.numberOfDaughtersValue))
      console.log(this.propertyAmountValue +"numberOfDaughtersValue")
    }
    else if (this.numberOfSonsValue > 0 && this.numberOfDaughtersValue == 0 && this.hasWifeValue && !this.hasFatherValue && !this.hasMotherValue && this.numberOfPaternalBrothersValue >= 0 && this.numberOfPaternalSistersValue >= 0) {
      this.resultS = (this.propertyAmountValue - (this.propertyAmountValue / 8)) / this.numberOfSonsValue
    }
    else if (this.numberOfSonsValue > 0 && this.hasFatherValue && this.hasMotherValue && !this.hasWifeValue) {
      this.resultS = (this.propertyAmountValue - ((1 / 3) * this.propertyAmountValue) - this.numberOfDaughtersValue * ((this.propertyAmountValue - (1 / 3) * this.propertyAmountValue) / (2 * this.numberOfSonsValue + this.numberOfDaughtersValue))) / this.numberOfSonsValue
    }
    else if (this.numberOfSonsValue > 0 && this.hasFatherValue && this.hasMotherValue && this.hasWifeValue) {
      this.resultS = (this.propertyAmountValue - ((1 / 3) * this.propertyAmountValue) - this.numberOfDaughtersValue * ((this.propertyAmountValue - (1 / 3) * this.propertyAmountValue - (this.propertyAmountValue / 8)) / (2 * this.numberOfSonsValue + this.numberOfDaughtersValue)) - ((1 / 8) * this.propertyAmountValue)) / this.numberOfSonsValue
    }
    else if (this.numberOfSonsValue > 0 && this.hasWifeValue && !this.hasMotherValue && !this.hasFatherValue) {
      this.resultS = (this.propertyAmountValue - (this.propertyAmountValue / 8) - this.numberOfDaughtersValue * ((this.propertyAmountValue - (this.propertyAmountValue / 8)) / (2 * this.numberOfSonsValue + this.numberOfDaughtersValue))) / this.numberOfSonsValue
    }
    // else if(this.numberOfSonsValue > 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue && !this.hasWifeValue && !this.hasMotherValue){
    //   this.resultS = (this.propertyAmountValue - (this.propertyAmountValue / 6)) / this.numberOfSonsValue
    // }
    else if (this.numberOfSonsValue > 0 && this.hasFatherValue && !this.hasMotherValue && !this.hasWifeValue) {
      this.resultS = (this.propertyAmountValue - (this.propertyAmountValue / 6) - this.numberOfDaughtersValue * ((this.propertyAmountValue - (this.propertyAmountValue / 6)) / (2 * this.numberOfSonsValue + this.numberOfDaughtersValue))) / this.numberOfSonsValue
    }
  }

  calculateDaughters(): void {
    if (this.numberOfSonsValue  > 0 && this.numberOfDaughtersValue >= 0 && !this.hasFatherValue && !this.hasMotherValue && !this.hasWifeValue) {
      this.resultD = (this.propertyAmountValue / (2 * this.numberOfSonsValue  + this.numberOfDaughtersValue))
    }
    else if (this.numberOfSonsValue  == 0 && this.numberOfDaughtersValue > 0 && this.hasWifeValue && !this.hasFatherValue && !this.hasMotherValue) {
      this.resultD = (this.propertyAmountValue - (this.propertyAmountValue / 8)) / this.numberOfDaughtersValue
    }
    else if (this.numberOfSonsValue  == 0 && ((this.hasMotherValue && this.hasFatherValue) || (this.hasMotherValue) || (this.hasFatherValue) || (this.hasFatherValue && this.hasWifeValue)) && this.numberOfDaughtersValue >= 2) {
      this.resultD = (2 * (this.propertyAmountValue / 3)) / this.numberOfDaughtersValue
    }
    else if (this.numberOfSonsValue  == 0 && this.numberOfDaughtersValue == 1 && ((this.hasMotherValue && this.hasFatherValue) || (this.hasFatherValue) || (this.hasMotherValue && this.hasFatherValue && this.hasWifeValue) || (this.hasFatherValue && this.hasWifeValue) || (this.numberOfPaternalSistersValue + this.numberOfPaternalBrothersValue >= 1))) {
      this.resultD = this.propertyAmountValue / 2
    }
    else if (this.numberOfSonsValue  > 0 && this.hasFatherValue && this.hasMotherValue && !this.hasWifeValue) {
      this.resultD = (this.propertyAmountValue - (1 / 3) * this.propertyAmountValue) / (2 * this.numberOfSonsValue  + this.numberOfDaughtersValue)
    }
    else if (this.numberOfSonsValue  > 0 && this.hasWifeValue && !this.hasMotherValue && !this.hasFatherValue) {
      this.resultD = (this.propertyAmountValue - (this.propertyAmountValue / 8)) / (2 * this.numberOfSonsValue  + this.numberOfDaughtersValue)
    }
    else if (this.numberOfSonsValue  > 0 && this.hasFatherValue && this.hasMotherValue && this.hasWifeValue) {
      this.resultD = (this.propertyAmountValue - ((1 / 3) * this.propertyAmountValue) - (this.propertyAmountValue / 8)) / (2 * this.numberOfSonsValue  + this.numberOfDaughtersValue)
    }
    else if (this.numberOfSonsValue  > 0 && this.hasFatherValue && !this.hasMotherValue && !this.hasWifeValue) {
      this.resultD = (this.propertyAmountValue - (this.propertyAmountValue / 6)) / (2 * this.numberOfSonsValue  + this.numberOfDaughtersValue)
    }
    if (this.numberOfSonsValue  == 0 && !this.hasFatherValue && this.numberOfDaughtersValue >= 2 && this.hasMotherValue && !this.hasWifeValue) {
      this.resultD = (4 * (this.propertyAmountValue / 5)) / this.numberOfDaughtersValue
    }
    else if (this.numberOfSonsValue  == 0 && !this.hasFatherValue && this.numberOfDaughtersValue == 1 && this.hasMotherValue && !this.hasWifeValue) {
      this.resultD = 3 * this.propertyAmountValue / 4
    }
  }

  calculateFather(): void {
    console.log(this.hasFatherValue);

    if (this.hasFatherValue!= true) {
      this.resultF = 0;
      console.log(this.resultF);
      return
    }
    if (this.numberOfSonsValue == 0 && this.hasFatherValue&& this.numberOfDaughtersValue >= 2 && !this.hasMotherValue && !this.hasWifeValue) {
      this.resultF = this.propertyAmountValue- (2 * (this.propertyAmountValue/ 3))
    }
    else if (this.numberOfSonsValue > 0 && !this.hasMotherValue && !this.hasWifeValue) {
      if (this.hasFatherValue) {
        this.resultF = this.propertyAmountValue/ 6
      } else {
        this.resultF = 0;
      }
    }
    else if (this.numberOfSonsValue == 0 && this.hasFatherValue&& this.hasMotherValue && this.numberOfDaughtersValue == 1 && !this.hasWifeValue) {
      this.resultF = (1 / 3) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& this.hasMotherValue && !this.hasWifeValue) {
      this.resultF = this.propertyAmountValue- (this.propertyAmountValue/ 3)
    }
    else if (this.hasFatherValue&& this.numberOfSonsValue == 0 && !this.hasMotherValue && this.numberOfDaughtersValue == 1) {
      this.resultF = (1 / 2) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasWifeValue && this.hasMotherValue) {
      this.resultF = this.propertyAmountValue- (this.propertyAmountValue/ 6) - (this.propertyAmountValue/ 8)
    }
    else if (this.numberOfSonsValue > 0 && this.numberOfDaughtersValue >= 0 && this.hasFatherValue&& this.hasWifeValue && this.hasMotherValue) {
      this.resultF = this.propertyAmountValue/ 6
    }
    else if (this.numberOfSonsValue == 0 && this.hasFatherValue&& this.hasMotherValue && this.numberOfDaughtersValue == 1 && this.hasWifeValue) {
      this.resultF = this.propertyAmountValue- (this.propertyAmountValue/ 8) - (this.propertyAmountValue/ 6) - (this.propertyAmountValue/ 2)
    }

  }

  calculateMother(): void {
    if (this.numberOfSonsValue == 0 && !this.hasFatherValue&& this.numberOfDaughtersValue >= 2 && this.hasMotherValue && !this.hasWifeValue) {
      this.resultM = this.propertyAmountValue- (4 * (this.propertyAmountValue/ 5))
    }
    else if (this.numberOfSonsValue == 0 && !this.hasFatherValue&& this.numberOfDaughtersValue == 1 && this.hasMotherValue && !this.hasWifeValue) {
      this.resultM = this.propertyAmountValue/ 4
    }
    else if (this.numberOfSonsValue == 0 && this.hasFatherValue&& this.hasMotherValue && this.numberOfDaughtersValue == 0 && !this.hasWifeValue) {
      this.resultM = (1 / 3) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasWifeValue && this.hasMotherValue) {
      this.resultM = this.propertyAmountValue/ 6
    }
    else if (this.numberOfSonsValue > 0 && this.numberOfDaughtersValue >= 0 && this.hasFatherValue&& this.hasWifeValue && this.hasMotherValue) {
      this.resultM = this.propertyAmountValue/ 6
    }
    else if (this.numberOfSonsValue == 0 && this.hasFatherValue&& this.hasMotherValue && this.numberOfDaughtersValue == 1 && this.hasWifeValue) {
      this.resultM = this.propertyAmountValue/ 6
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.numberOfPaternalBrothersValue== 1 && this.numberOfPaternalSistersValue == 0) {
      this.resultM = (1 / 3) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultM = (1 / 3) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultM = (1 / 6) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultM = (1 / 3) * this.propertyAmountValue;
      this.resultM += this.propertyAmountValue- (this.resultM + this.resultSi + this.resultW);
    }
  }

  calculateWife(): void {
    if (this.hasWifeValue && this.numberOfSonsValue == 0 && this.numberOfDaughtersValue >= 2 && !this.hasFatherValue&& !this.hasMotherValue) {
      this.resultW = (1 / 8) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue > 0 && this.hasFatherValue&& this.hasMotherValue && this.hasWifeValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = this.propertyAmountValue/ 8
    }
    else if (this.hasWifeValue && this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 1) {
      this.resultW = (1 / 8) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& !this.hasMotherValue && (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2);
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& this.hasMotherValue && (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& this.numberOfPaternalBrothersValue== 1 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue>= 1 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue >= 2) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue> 0 && this.numberOfPaternalSistersValue > 0) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& !this.hasMotherValue && (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 1 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultW = (1 / 4) * (this.propertyAmountValue/ 2)
    }
    else if (this.numberOfSonsValue > 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.hasWifeValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = (1 / 8) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue > 0 && this.numberOfDaughtersValue > 0 && !this.hasFatherValue&& !this.hasMotherValue && this.hasWifeValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 0) {
      this.resultW = 1 * (this.propertyAmountValue/ 8)
    }

  }

  calculateBrothers(): void {
    if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& this.numberOfPaternalBrothersValue== 1 && this.numberOfPaternalSistersValue == 0) {
      this.resultB = (1 / 6) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue>= 1 && this.numberOfPaternalSistersValue == 0) {
      this.resultB = (this.propertyAmountValue- (1 / 4) * this.propertyAmountValue) / this.numberOfPaternalBrothersValue;
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue> 0 && this.numberOfPaternalSistersValue > 0) {
      this.resultB = this.numberOfPaternalBrothersValue* (2 * ((this.propertyAmountValue- this.resultW) / (2 * this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue)))
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultB = this.numberOfPaternalBrothersValue* (2 * (((1 / 3) * this.propertyAmountValue) / (2 * this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue)))
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& this.numberOfPaternalBrothersValue== 1 && this.numberOfPaternalSistersValue == 0) {
      this.resultB = (1 / 6) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& !this.hasMotherValue && (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultB = this.numberOfPaternalBrothersValue* (2 * (((1 / 3) * this.propertyAmountValue) / (2 * this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue)))
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 1 && this.numberOfPaternalSistersValue == 0) {
      this.resultB = (1 / 6) * this.propertyAmountValue
    }
  }

  calculateSisters(): void {
    if (this.numberOfPaternalSistersValue) {
      this.resultSi = this.numberOfPaternalSistersValue * ((this.propertyAmountValue- this.resultW) / (2 * this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue))
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue >= 2) {
      this.resultSi = (2 / 3) * (this.propertyAmountValue- this.resultW);
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultSi = (1 / 6) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultSi = (1 / 6) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultSi = this.numberOfPaternalSistersValue * (((1 / 3) * this.propertyAmountValue) / (2 * this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue))
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultSi = (1 / 2) * this.propertyAmountValue
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && !this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue> 0 && this.numberOfPaternalSistersValue > 0) {
      this.resultSi = this.numberOfPaternalSistersValue * ((this.propertyAmountValue- this.resultW) / (2 * this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue));
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& !this.hasMotherValue && (this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue) >= 2) {
      this.resultSi = this.numberOfPaternalSistersValue * (((1 / 3) * this.propertyAmountValue) / (2 * this.numberOfPaternalBrothersValue+ this.numberOfPaternalSistersValue))
    }
    else if (this.numberOfSonsValue == 0 && this.numberOfDaughtersValue == 0 && this.hasFatherValue&& !this.hasMotherValue && this.numberOfPaternalBrothersValue== 0 && this.numberOfPaternalSistersValue == 1) {
      this.resultSi = (1 / 6) * this.propertyAmountValue
    }
  }
}
