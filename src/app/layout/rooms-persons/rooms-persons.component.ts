import { Component, OnInit} from '@angular/core';
import { AppConfig } from '../../../config/appConfig';

@Component({
  selector: 'app-rooms-persons',
  templateUrl: './rooms-persons.component.html',
  styleUrls: ['./rooms-persons.component.scss']
})

export class RoomsPersonsComponent implements OnInit {

  showPopup = false;
  totalAdults=0;
  totalChildrens=0;
  tabChildrenAge: string[] = [];

  minRooms = AppConfig.roomPersons.minRooms;
  maxRooms = AppConfig.roomPersons.maxRooms;

  minAdults = AppConfig.roomPersons.minAdults;
  maxAdults = AppConfig.roomPersons.maxAdults;

  minChildrens = AppConfig.roomPersons.minChildrens;
  maxChildrens = AppConfig.roomPersons.maxChildrens;

  childrenAge = AppConfig.roomPersons.childrenAge;

  rooms = [{
    adults: 2,
    childrens: [
     //{age:6},{age:5},{age:2}
    ]
  }];

  constructor() { }

  ngOnInit() {
    console.log("rooms: ",this.rooms);
    this.getChildrenAge();
   // console.log("config00", config)
  }

  open() {
    this.showPopup = true;
  }
  close() {
    console.log("click CLOSE, this.rooms: ", this.rooms);
    this.showPopup = false;
  }
  addRoom() {
    if(this.rooms.length < this.maxRooms) {
      this.rooms.push({
      adults: this.minAdults,
      childrens: []
      })
    }
  }
  removeRoom() {
    console.log("removeRoom");
    if(this.rooms.length > this.minRooms) {
      this.rooms.pop();
    }
  }

  addAdult(idRoom) {
    if(this.rooms[idRoom].adults < (this.maxAdults+1)) {
      this.rooms[idRoom].adults++
    }
  }
  removeAdult(idRoom) {
    if(this.rooms[idRoom].adults > this.minAdults) {
      this.rooms[idRoom].adults--
    }
  }

  addChild(idRoom) {
    if(this.rooms[idRoom].childrens.length < this.maxChildrens) {
      this.rooms[idRoom].childrens.push({age: this.childrenAge.min})
    }
  }
  removeChild(idRoom) {
    if(this.rooms[idRoom].childrens.length > this.minChildrens) {
      this.rooms[idRoom].childrens.pop()
    }
  }

  getTotalAdults() {
    return this.totalAdults = this.rooms.reduce(function(prev, cur) {
      return prev + cur.adults;
    }, 0);
  }
  getTotalChildren() {
    return this.totalChildrens = this.rooms.reduce(function(prev, cur) {
      return prev + cur.childrens.length;
    }, 0);
  }

  getChildrenAge() {
    this.tabChildrenAge[0] = "<"+this.childrenAge.min;
    for (var i=this.childrenAge.min; i<this.childrenAge.max+1; i++) {
      this.tabChildrenAge.push(i.toString());
    }
    return this.tabChildrenAge
  }
}
