import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { OtpComponent } from '../components/form/otp/otp.component';

@Component({
  selector: 'app-otpconfirm',
  templateUrl: './otpconfirm.page.html',
  styleUrls: ['./otpconfirm.page.scss'],
  standalone: true,
  imports: [IonContent,
     IonHeader, IonTitle, IonToolbar, CommonModule, 
     FormsModule, IonCard, IonItem, IonCardHeader, IonCardContent, IonCardTitle,
     OtpComponent]
})
export class OtpconfirmPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
