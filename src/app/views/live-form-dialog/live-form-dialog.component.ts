import { Live } from 'src/app/shared/models/live.model';
import { LiveService } from './../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit{
  liveForm: any

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private listService: LiveService
  ) {}

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      liveName: ['', Validators.required],
      channelName: ['', Validators.required],
      liveLink: ['', Validators.required],
      liveDate: ['', [Validators.required]],
      liveTime: ['', Validators.required]
    })
  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

  createLive() {
    let newDate: moment.Moment = moment.utc().local()
    this.liveForm.value.liveDate = newDate.format("YYYY-MM-DD" + "T" + this.liveForm.value.liveTime)
    this.listService.postLives(this.liveForm.value).subscribe()
    this.dialogRef.close();
    this.liveForm.reset();
    window.location.reload();
  }
}
