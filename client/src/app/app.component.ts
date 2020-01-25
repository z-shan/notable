import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from './shared/services/appointments.service';
import { PhysicianService } from './shared/services/physician.service';
import { IAppointment } from './shared/models/appointment.model';
import { IPhysician } from './shared/models/physician.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor() {}

  ngOnInit() {}
}
