import { Component } from '@angular/core';
import { Rooms, RoomList} from './rooms';

@Component({
  selector: 'hinv-rooms',
  standalone: false,
  
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 100;
  hideRooms = false;

  rooms: Rooms = {
    totalRooms: 100,
    availableRooms: 50,
    bookedRooms: 25
  }

  roomList: RoomList[] = [{
    roomNumber: 101,
    roomType: 'Single',
    amenities: 'AC, TV, WiFi',
    price: 5000,
    photos: 'single.jpg',
    checkInTime: new Date('2021-10-01T10:00:00'),
    checkOutTime: new Date('2021-10-01T12:00:00')
  },
  {
    roomNumber: 102,
    roomType: 'Double',
    amenities: 'AC, TV, WiFi',
    price: 8000,
    photos: 'double.jpg',
    checkInTime: new Date('2021-10-01T10:00:00'),
    checkOutTime: new Date('2021-10-01T12:00:00')
  },
  {
    roomNumber: 103,
    roomType: 'Suite',
    amenities: 'AC, TV, WiFi, Kitchen',
    price: 12000,
    photos: 'suite.jpg',
    checkInTime: new Date('2021-10-01T10:00:00'),
    checkOutTime: new Date('2021-10-01T12:00:00')
  }]

  constructor() { }

  ngOnInit(): void {

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
