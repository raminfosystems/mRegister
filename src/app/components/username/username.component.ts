import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  standalone: true,
  selector: 'input-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
  imports: [
    IonicModule
  ]
})
export class UsernameComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
