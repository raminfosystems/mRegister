import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {MaskitoModule} from "@maskito/angular";
import {UserRegistrationComponent} from "../components/user-registration/user-registration.component";
import { StorageService } from '../api/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, MaskitoModule, UserRegistrationComponent],
})
export class HomePage {
  constructor() {}
}
