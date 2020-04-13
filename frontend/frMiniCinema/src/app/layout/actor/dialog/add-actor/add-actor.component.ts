import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Actor} from '../../../shared/interface/common';
import {ActorService} from '../../../shared/services/actor.service';
import { formatDate } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.scss']
})
export class AddActorComponent implements OnInit {
  actorFormGroup: any;
  gender: string;
  actrName: string;
  bio: string;
  dob: any;
  max = new Date();
  result=[];
  constructor(
    private fb: FormBuilder,
    private actorService: ActorService,
    public dialogRef: MatDialogRef<AddActorComponent>) {
    this.actorFormGroup = this.fb.group({
      actorName: [''],
      dateOfBirth: [],
      gender: [''],
      bio: ['']
    });
   }

  ngOnInit() {

  }

  saveDetails() {
    this.actrName = this.actorFormGroup.controls.actorName.value;
    this.gender = this.actorFormGroup.controls.gender.value;
    this.bio = this.actorFormGroup.controls.bio.value;
    this.dob = this.actorFormGroup.controls.dateOfBirth.value;
    this.actorFormGroup.value.dateOfBirth = formatDate( this.actorFormGroup.value.dateOfBirth, 'yyyy-MM-dd', 'en-US');
    this.actorService.createActor(this.actorFormGroup.value).subscribe(res => {
      this.result.push(res);
    });
  }

  closeBtn() {
     this.dialogRef.close();
  }

}
