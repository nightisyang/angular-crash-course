import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService], // if you want to use a service as a local instance
})
export class EmployeeComponent {
  // injecting service here
  constructor(@Self() private roomsService: RoomsService) {}

  empName: string = 'John';
}
