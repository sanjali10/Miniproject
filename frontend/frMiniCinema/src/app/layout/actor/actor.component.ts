import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Actor} from '../shared/interface/common';
import {ActorService} from '../shared/services/actor.service';
import { formatDate } from '@angular/common';
import {MatTableDataSource, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material';
import {AddActorComponent} from './dialog/add-actor/add-actor.component';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {
  actorFormGroup: any;
  gender: string;
  actrName: string;
  bio: string;
  dob: any;
  max = new Date();
  dataSource: Actor[];
  displayColumns: string[] = ['actorName', 'gender', 'dob', 'bio', 'actions'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

 // dataSource = new ActorDataSource (this.actorService);

  constructor(private fb: FormBuilder, private actorService: ActorService , public dialog: MatDialog) {
    this.actorFormGroup = this.fb.group({
      actorName: [''],
      dateOfBirth: [],
      gender: [''],
      bio: ['']
    });
  }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.actorService.getActorDetails().subscribe(data => {
      this.dataSource  =  data;
    });
  }

  saveDetails() {
    this.actrName = this.actorFormGroup.controls.actorName.value;
    this.gender = this.actorFormGroup.controls.gender.value;
    this.bio = this.actorFormGroup.controls.bio.value;
    this.dob = this.actorFormGroup.controls.dateOfBirth.value;
    this.actorFormGroup.value.dateOfBirth = formatDate( this.actorFormGroup.value.dateOfBirth, 'yyyy-MM-dd', 'en-US');
    this.actorService.createActor(this.actorFormGroup.value).subscribe(res => {
      this.loadData();
    });
  }

  addActor() {
   const dialogRef = this.dialog.open(AddActorComponent);
   dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

}

export class ActorDataSource extends DataSource<any> {
  constructor(private actorService: ActorService) {
    super();
  }
  connect(): Observable<Actor[]> {
    return this.actorService.getActorDetails();
  }
  disconnect() {

  }
}
