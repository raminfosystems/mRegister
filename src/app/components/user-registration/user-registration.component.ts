import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {UsernameComponent} from "../username/username.component";
import {UkmobilenumberComponent} from "../ukmobilenumber/ukmobilenumber.component";
import {RegisterButtonComponent} from "../register-button/register-button.component";

@Component({
  standalone: true,
  selector: 'user-registration-form',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  imports: [
    IonicModule,
    UsernameComponent,
    UkmobilenumberComponent,
    RegisterButtonComponent
  ]
})
export class UserRegistrationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
