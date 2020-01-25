import { Component, OnInit } from '@angular/core';
import { IPhysician } from '../shared/models/physician.model';
import { PhysicianService } from '../shared/services/physician.service';

@Component({
  selector: 'app-physician-list',
  templateUrl: './physician-list.component.html',
  styleUrls: ['./physician-list.component.scss']
})
export class PhysicianListComponent implements OnInit {

  physicians: IPhysician[];
  constructor(private physicianService: PhysicianService) { }

  ngOnInit() {
    this.getPhysicians();
  }

  getPhysicians() {
    this.physicianService.getPhysicians()
      .subscribe(data => {
        this.physicians = data.result;
        this.setPhysician(this.physicians[0]);
      });
  }

  setPhysician(physician: IPhysician) {
    this.physicianService.setSelectedPhysician(physician);
  }

}
