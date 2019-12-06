import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService, private dataService: DataService) {} // {2}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  getData() {
    this.dataService.getData()
      .subscribe(data => {
        console.log(data)
      });
  }


}
