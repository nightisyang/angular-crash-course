import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Inject,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from Inline Template!</h1>`,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1{color: red}`],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  role = 'Admin';

  constructor(@Inject(localStorageToken) private localStorage: any) {}

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'John';
    this.localStorage.setItem('name', 'Hotel California');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);

  //   componentRef.instance.numberOfRooms = 50;
  // }
}
