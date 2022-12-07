import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  // constructor should not have any logic code
  constructor(@SkipSelf() private roomsService: RoomsService) {}

  hotelName = 'Hotel California';
  numberOfRooms: number = 20;
  hideRoom = false;
  roomList: RoomList[] = [];
  selectedRoom!: RoomList;
  title = 'Room List';

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // don't declare service manually - anti-pattern
  // do it in constructor
  // roomService = new RoomsService();

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  toggle() {
    this.hideRoom = !this.hideRoom;
    this.title = 'Rooms List';
  }

  // where the logic should be written, API calls etc etc, placed in a service
  ngOnInit(): void {
    this.roomsService.getRooms().subscribe((rooms) => (this.roomList = rooms));

    // only returns a value if component is static
    // console.log(this.headerComponent);
  }

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngAfterViewInit(): void {
    // useful if component is async, is called only after it is fulfilled
    this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.last.title = 'Last Title';
    // console.log(this.headerChildrenComponent.last);
  }

  ngAfterViewChecked(): void {}

  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Everythinggggg',
      price: 2000,
      photos: '',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.9,
    };

    // reassign to a new array, that contains the old record and new element
    // roomList.push doesn't work with onPush because it modifies existing data - this is discouraged.
    // create a new instance by passing new array
    this.roomList = [...this.roomList, room];
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
