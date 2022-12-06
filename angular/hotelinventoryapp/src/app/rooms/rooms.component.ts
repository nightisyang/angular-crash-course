import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  // should not have any logic code
  constructor() {}

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  hotelName = 'Hotel California';
  numberOfRooms: number = 20;
  hideRoom = false;
  roomList: RoomList[] = [];
  selectedRoom!: RoomList;
  title = 'Room List';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  toggle() {
    this.hideRoom = !this.hideRoom;
    this.title = 'Rooms List';
  }

  // where the logic should be written, API call
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.1,
      },
      {
        roomNumber: 2,
        roomType: 'Regular Room',
        amenities: 'Air Conditioner, Bathroom, Kitchen',
        price: 300,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.2,
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Kitchen',
        price: 200,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.5,
      },
      {
        roomNumber: 4,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom',
        price: 100,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.2,
      },
    ];
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
      roomNumber: 4,
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
