import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  standalone: true,
  selector: 'register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.scss'],
  imports: [
    IonicModule
  ]
})
export class RegisterButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  // Onclick event for register button redirect to otpconfirm page
  register() {
    window.location.href = '/otpconfirm';
  } 

}
