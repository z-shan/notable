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
  physicians: IPhysician;
  appointments: IAppointment[];
  selectedPhysician: IPhysician[];

  constructor(private appointmentsService: AppointmentsService,
              private physicianService: PhysicianService) {}

  ngOnInit() {
    this.getPhysicians();
  }

  getPhysicians() {
    this.physicianService.getPhysicians()
      .subscribe(data => {
        this.physicians = data.result;
        this.getAppointments(this.physicians[0]);
      });
  }

  getAppointments(physician) {
    console.log('line 40', physician);
    this.selectedPhysician = physician;
    this.appointmentsService.getAppointmentsByPhysicianId(physician._id)
      .subscribe(data => {
        this.appointments = data.result;
        console.log(data);
      });
  }
}
