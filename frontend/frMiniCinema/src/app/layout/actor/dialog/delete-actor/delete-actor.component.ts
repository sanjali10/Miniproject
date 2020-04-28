import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ActorService} from '../../../shared/services/actor.service';
@Component({
  selector: 'app-delete-actor',
  templateUrl: './delete-actor.component.html',
  styleUrls: ['./delete-actor.component.scss']
})
export class DeleteActorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteActorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private actorService: ActorService
  ) { }

  ngOnInit() {
  }

  removeActor() {
    this.actorService.deleteActorById(this.data.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
  close(){
    this.dialogRef.close();
  }
}
