import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {ActorService} from '../../../shared/services/actor.service';
import { formatDate } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Actor} from '../../../shared/interface/common';
@Component({
  selector: 'app-update-actor',
  templateUrl: './update-actor.component.html',
  styleUrls: ['./update-actor.component.scss']
})
export class UpdateActorComponent implements OnInit {
  actorFormGroup: FormGroup;
  gender: string;
  actrName: string;
  bio: string;
  dob: any;
  selectGender: string;
  constructor(
    private fb: FormBuilder,
    private actorService: ActorService,
    private dialogRef: MatDialogRef<UpdateActorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.actorFormGroup = this.fb.group({
      actorName: [''],
      dateOfBirth: [''],
      gender: [''],
      bio: [''],
      _id: ['']
      });
    this.actorService.getRecordById(this.data.id).subscribe(data => {
      data.forEach(prop => {
        this.selectGender = prop.Gender;
        this.actorFormGroup = this.fb.group({
          actorName: [prop.ActrName],
          dateOfBirth: [prop.DOB],
          gender: [prop.Gender],
          bio: [prop.Bio]
          });
      });
  });
  }
  updateRecord() {
    const record = {
      ActrName: this.actorFormGroup.controls.actorName.value,
      DOB: formatDate( this.actorFormGroup.value.dateOfBirth, 'yyyy-MM-dd', 'en-US'),
      Gender: this.actorFormGroup.controls.gender.value,
      bio: this.actorFormGroup.controls.bio.value,
    };
    this.actorService.updateActorById(this.data.id, record).subscribe((msg) => {
      console.log('updated successfully', msg);
    });
  }
  closeBtn() {
    this.dialogRef.close();
  }
}
