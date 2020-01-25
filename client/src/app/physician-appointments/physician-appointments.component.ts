import { Component, OnInit } from '@angular/core';
import { IAppointment } from '../shared/models/appointment.model';
import { AppointmentsService } from '../shared/services/appointments.service';
import { Subscription } from 'rxjs';
import { PhysicianService } from '../shared/services/physician.service';

@Component({
  selector: 'app-physician-appointments',
  templateUrl: './physician-appointments.component.html',
  styleUrls: ['./physician-appointments.component.scss']
})
export class PhysicianAppointmentsComponent implements OnInit {
  appointments: IAppointment[];
  selectedPhysician: any;
  selectedPhysicianSub: Subscription;

  constructor(private appointmentsService: AppointmentsService, private physicianService: PhysicianService) { }

  ngOnInit() {
    this.selectedPhysicianSub = this.physicianService.selectedPhysicianChanged$.subscribe(physician => {
      this.selectedPhysician = physician;
      if (this.selectedPhysician) {
        this.getAppointments(this.selectedPhysician);
      }
    });
  }

  getAppointments(physician) {
    this.selectedPhysician = physician;
    this.appointmentsService.getAppointmentsByPhysicianId(physician._id)
      .subscribe(data => {
        this.appointments = data.result;
      });
  }
}
