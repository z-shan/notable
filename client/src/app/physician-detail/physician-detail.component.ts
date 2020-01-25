import { Component, OnInit } from '@angular/core';
import { PhysicianService } from '../shared/services/physician.service';
import { IPhysician } from '../shared/models/physician.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-physician-detail',
  templateUrl: './physician-detail.component.html',
  styleUrls: ['./physician-detail.component.scss']
})
export class PhysicianDetailComponent implements OnInit {

  selectedPhysician: IPhysician;
  selectedPhysicianSub: Subscription;

  constructor(private physicianService: PhysicianService) { }

  ngOnInit() {
    this.selectedPhysicianSub = this.physicianService.selectedPhysicianChanged$.subscribe(physician => {
      this.selectedPhysician = physician;
    });
  }

}
